const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase env vars in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
        headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
        }
    }
});

async function seed() {
  console.log("Fetching an admin profile...");
  const { data: profiles, error: profileErr } = await supabase
    .from('profiles')
    .select('id')
    .limit(1);

  const adminId = profiles?.[0]?.id;
  if (!adminId) {
      console.error("No profiles found! Exiting.");
      process.exit(1);
  }

  console.log("Loading mock data...");
  const { mockBooks, mockArticles, mockConcepts, mockPersons } = require('../lib/mock-data');

  console.log("Seeding Concepts...");
  for (const concept of mockConcepts) {
    const { data, error } = await supabase
      .from('concepts')
      .upsert({
        slug: concept.slug,
        title: concept.title || concept.name,
        category: concept.category || 'genel',
        definition: concept.definition || concept.shortDescription || concept.content || "Tanım girilmedi.",
        status: 'published'
      }, { onConflict: 'slug' });
    
    if (error) console.error("Error seeding concept:", concept.slug, error.message);
  }
  
  console.log("Seeding completed!");
}

seed().catch(console.error);
