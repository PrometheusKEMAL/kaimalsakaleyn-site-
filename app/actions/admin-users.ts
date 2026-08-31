"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

// Service role key ile yetkilendirilmiş admin istemcisi
const createAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase URL veya Service Role Key bulunamadı. Lütfen .env.local dosyanızı kontrol edin.");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};

export async function updateUserAdmin(
  userId: string,
  data: {
    fullName?: string;
    email?: string;
    password?: string;
    role?: string;
  }
) {
  try {
    const supabaseAdmin = createAdminClient();

    // 1. Eğer şifre veya email değişiyorsa Auth tablosunu güncelle
    if (data.email || data.password) {
      const updateData: any = {};
      if (data.email) updateData.email = data.email;
      if (data.password) updateData.password = data.password;
      // email_confirm: true diyerek e-posta değişikliğinin onay gerektirmeden uygulanmasını sağlıyoruz
      updateData.email_confirm = true;

      const { data: authData, error: authError } = await supabaseAdmin.auth.admin.updateUserById(
        userId,
        updateData
      );

      if (authError) {
        return { success: false, error: authError.message };
      }
    }

    // 2. İsim veya rol değişiyorsa public.profiles tablosunu güncelle
    if (data.fullName !== undefined || data.role !== undefined) {
      const updateProfile: any = {};
      if (data.fullName !== undefined) updateProfile.full_name = data.fullName;
      if (data.role !== undefined) updateProfile.role = data.role;

      const { error: profileError } = await supabaseAdmin
        .from("profiles")
        .update(updateProfile)
        .eq("id", userId);

      if (profileError) {
        return { success: false, error: profileError.message };
      }
    }

    revalidatePath("/admin/kullanicilar");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function createUserAdmin(
  data: {
    fullName: string;
    email: string;
    password?: string;
    role: string;
  }
) {
  try {
    const supabaseAdmin = createAdminClient();

    // Generate random password if not provided
    const password = data.password || Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: password,
      email_confirm: true,
      user_metadata: { full_name: data.fullName },
    });

    if (authError) {
      return { success: false, error: authError.message };
    }

    // The profiles table triggers might automatically create a profile with 'user' role.
    // So we need to update it to the specific role after creation.
    if (authData.user && data.role !== "user") {
      // Small delay to ensure the trigger has run
      await new Promise(resolve => setTimeout(resolve, 500));
      
      await supabaseAdmin
        .from("profiles")
        .update({ role: data.role })
        .eq("id", authData.user.id);
    }

    revalidatePath("/admin/kullanicilar");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
