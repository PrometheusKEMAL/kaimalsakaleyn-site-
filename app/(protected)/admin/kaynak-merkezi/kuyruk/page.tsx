import { createServerSupabaseClient } from "@/lib/supabase/server";
import ReviewQueueClient from "./ReviewQueueClient";

export default async function ReviewQueuePage() {
  const supabase = (await createServerSupabaseClient()) as any;

  const { data: queueItems, error } = await supabase
    .from("ingestion_queue")
    .select("*")
    .eq("status", "needs_review")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching ingestion queue:", error);
  }

  return <ReviewQueueClient initialItems={queueItems || []} />;
}
