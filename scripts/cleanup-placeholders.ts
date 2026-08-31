import { createClient } from "@supabase/supabase-js";

// Note: Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your environment
// before running this script (e.g., passing them via the CLI).

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);

async function runCleanup() {
  console.log("Starting Placeholder Cleanup for Books...");

  // Select books with generic placeholder strings
  const { data: books, error } = await supabase
    .from("books")
    .select("id, title, author, translator, publisher");

  if (error) {
    console.error("Error fetching books:", error);
    return;
  }

  if (!books) {
    console.log("No books found.");
    return;
  }

  let updatedCount = 0;

  for (const book of books) {
    let needsUpdate = false;
    const updates: any = {};

    // Check for fake translators
    if (book.translator && (book.translator.toLowerCase().includes("bilinmeyen") || book.translator.toLowerCase() === "anonim")) {
      updates.translator = null;
      needsUpdate = true;
    }

    // Check for fake publishers
    if (book.publisher && (book.publisher.toLowerCase().includes("fake") || book.publisher.toLowerCase() === "bilinmiyor")) {
      updates.publisher = null;
      needsUpdate = true;
    }

    if (needsUpdate) {
      console.log(`Cleaning placeholders for book: ${book.title}`);
      const { error: updateError } = await supabase
        .from("books")
        .update(updates)
        .eq("id", book.id);

      if (updateError) {
        console.error(`Failed to update ${book.title}:`, updateError);
      } else {
        updatedCount++;
      }
    }
  }

  console.log(`Cleanup complete. Updated ${updatedCount} records to remove unverified placeholders.`);
}

runCleanup().catch(console.error);
