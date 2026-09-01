const fs = require('fs');

const files = [
  'supabase/schema.sql',
  'supabase/schema_phase3.sql',
  'supabase/schema_phase4.sql',
  'supabase/storage-policies.sql'
];

let c = files.map(f => {
    if (fs.existsSync(f)) {
        return fs.readFileSync(f, 'utf8');
    }
    return '';
}).join('\n\n');

// 1. Tables: Replace create table with IF NOT EXISTS (handle if it already has it)
c = c.replace(/create table(\s+if\s+not\s+exists)?\s+([\w\.]+)/gi, 'CREATE TABLE IF NOT EXISTS $2');

// 2. Policies: Prepend DROP POLICY IF EXISTS before CREATE POLICY
c = c.replace(/create policy\s+"([^"]+)"\s+on\s+([\w\.]+)/gi, 'DROP POLICY IF EXISTS "$1" ON $2;\nCREATE POLICY "$1" ON $2');

// 3. Triggers: Prepend DROP TRIGGER IF EXISTS before CREATE TRIGGER
c = c.replace(/create trigger\s+(\w+)\s+(before|after)\s+(insert|update|delete)\s+on\s+([\w\.]+)/gi, 'DROP TRIGGER IF EXISTS $1 ON $4;\nCREATE TRIGGER $1 $2 $3 ON $4');

fs.writeFileSync('supabase/safe_schema.sql', c);
console.log("safe_schema.sql generated successfully with Double IF NOT EXISTS fixes!");
