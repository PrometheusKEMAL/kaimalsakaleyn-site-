import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Admin Panel",
  description: "KaimAlSakaleyn yönetim paneli",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/giris");
  }

  const { data: profileData } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const profile = profileData as { role: string } | null;

  if (!profile || !["admin", "moderator"].includes(profile.role)) {
    redirect("/meclis");
  }

  return (
    <div className="pt-24 pb-section-lg px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">
        <AdminSidebar role={profile.role} />
        
        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
