-- KaimAlSakaleyn Database Schema Phase 4: Content Architecture & Knowledge Graph

-- 1. Enum Definitions
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'editorial_status') THEN
    CREATE TYPE editorial_status AS ENUM ('draft', 'researching', 'source_review', 'editor_review', 'approved', 'published', 'archived');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'entity_type') THEN
    CREATE TYPE entity_type AS ENUM ('person', 'concept', 'book', 'article', 'hadith', 'quran_verse', 'event', 'sermon', 'letter', 'wisdom', 'dua', 'dossier');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'copyright_status_type') THEN
    CREATE TYPE copyright_status_type AS ENUM ('public_domain', 'licensed', 'permission_granted', 'external_only', 'unknown');
  END IF;
END $$;

-- 2. Knowledge Graph Nodes (Central Entity Index)
CREATE TABLE IF NOT EXISTS public.kg_nodes (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  type entity_type NOT NULL,
  entity_id uuid NOT NULL, -- The ID in the specific table (e.g. persons.id, hadiths.id)
  title text NOT NULL,
  slug text,
  ai_generated boolean NOT NULL DEFAULT true,
  status editorial_status NOT NULL DEFAULT 'draft',
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  PRIMARY KEY (id),
  UNIQUE (type, entity_id)
);

-- 3. Knowledge Graph Edges (Relationships)
CREATE TABLE IF NOT EXISTS public.kg_edges (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  source_node_id uuid NOT NULL REFERENCES public.kg_nodes(id) ON DELETE CASCADE,
  target_node_id uuid NOT NULL REFERENCES public.kg_nodes(id) ON DELETE CASCADE,
  relation_type text NOT NULL CHECK (relation_type IN ('mentions', 'related_to', 'authored_by', 'commented_by', 'quotes', 'explains', 'historically_related', 'source_of', 'about', 'teacher_of', 'student_of')),
  weight integer DEFAULT 1,
  PRIMARY KEY (id),
  UNIQUE (source_node_id, target_node_id, relation_type)
);

-- 4. Central Source Reference Model
CREATE TABLE IF NOT EXISTS public.sources (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text,
  original_title text,
  publisher text,
  publication_year text,
  edition text,
  volume text,
  page text,
  language text,
  isbn text,
  url text,
  source_type text NOT NULL CHECK (source_type IN ('primary', 'classical', 'modern', 'academic', 'encyclopedic', 'web')),
  verification_status text NOT NULL DEFAULT 'unverified' CHECK (verification_status IN ('verified', 'partial', 'unverified')),
  PRIMARY KEY (id)
);

-- 5. Extend existing tables or recreate robust versions for missing features
-- Persons (14 Masum & Scholars)
CREATE TABLE IF NOT EXISTS public.persons (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  person_type text NOT NULL CHECK (person_type IN ('masum', 'scholar', 'historical_figure')),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  title text,
  laqabs text[],
  kunyas text[],
  birth_date text,
  birth_place text,
  death_date text,
  occultation_status text,
  father text,
  mother text,
  imamate_period text,
  political_context text,
  legacy text,
  moral_teachings text,
  biography text,
  ai_generated boolean NOT NULL DEFAULT true,
  editorial_status editorial_status NOT NULL DEFAULT 'draft',
  PRIMARY KEY (id)
);

-- Nahj al-Balagha Models
CREATE TABLE IF NOT EXISTS public.nahj_sermons (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  number integer NOT NULL,
  title text,
  arabic_text text NOT NULL,
  translation text,
  summary text,
  topics text[],
  historical_context text,
  source_notes text,
  ai_generated boolean NOT NULL DEFAULT true,
  editorial_status editorial_status NOT NULL DEFAULT 'draft',
  PRIMARY KEY (id),
  UNIQUE(number)
);

CREATE TABLE IF NOT EXISTS public.nahj_letters (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  number integer NOT NULL,
  recipient text,
  title text,
  arabic_text text NOT NULL,
  translation text,
  topics text[],
  historical_context text,
  ai_generated boolean NOT NULL DEFAULT true,
  editorial_status editorial_status NOT NULL DEFAULT 'draft',
  PRIMARY KEY (id),
  UNIQUE(number)
);

CREATE TABLE IF NOT EXISTS public.nahj_wisdoms (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  number integer NOT NULL,
  arabic_text text NOT NULL,
  translation text,
  topics text[],
  commentary text,
  ai_generated boolean NOT NULL DEFAULT true,
  editorial_status editorial_status NOT NULL DEFAULT 'draft',
  PRIMARY KEY (id),
  UNIQUE(number)
);

-- Sahifa Sajjadiyya Model
CREATE TABLE IF NOT EXISTS public.sahifa_duas (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  number integer NOT NULL,
  title text NOT NULL,
  arabic_title text,
  summary text,
  occasion text,
  topics text[],
  arabic_text text NOT NULL,
  translation text,
  commentary text,
  ai_generated boolean NOT NULL DEFAULT true,
  editorial_status editorial_status NOT NULL DEFAULT 'draft',
  PRIMARY KEY (id),
  UNIQUE(number)
);

-- Karbala & Mahdaviyat Thematic Files
CREATE TABLE IF NOT EXISTS public.thematic_events (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  theme text NOT NULL CHECK (theme IN ('karbala', 'mahdaviyat', 'imamate')),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  content text,
  certainty_level text CHECK (certainty_level IN ('widely_reported', 'disputed', 'weak_report', 'symbolic_interpretation')),
  ai_generated boolean NOT NULL DEFAULT true,
  editorial_status editorial_status NOT NULL DEFAULT 'draft',
  PRIMARY KEY (id)
);

-- Replace Hadiths grading text with rigorous constraint
ALTER TABLE public.hadiths DROP COLUMN IF EXISTS grading;
ALTER TABLE public.hadiths ADD COLUMN IF NOT EXISTS rigorous_grading text CHECK (rigorous_grading IN ('sahih', 'hasan', 'daeef', 'mutawatir', 'unknown')) DEFAULT 'unknown';
ALTER TABLE public.hadiths ADD COLUMN IF NOT EXISTS grading_source text;
ALTER TABLE public.hadiths ADD COLUMN IF NOT EXISTS ai_generated boolean NOT NULL DEFAULT true;
ALTER TABLE public.hadiths ADD COLUMN IF NOT EXISTS editorial_status editorial_status NOT NULL DEFAULT 'draft';

-- Update Books table with copyright status and editorial status
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS strict_copyright_status copyright_status_type DEFAULT 'unknown';
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS ai_generated boolean NOT NULL DEFAULT true;
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS editorial_status editorial_status NOT NULL DEFAULT 'draft';

-- Update Concepts with editorial status and missing fields
ALTER TABLE public.concepts ADD COLUMN IF NOT EXISTS arabic_title text;
ALTER TABLE public.concepts ADD COLUMN IF NOT EXISTS persian_title text;
ALTER TABLE public.concepts ADD COLUMN IF NOT EXISTS short_definition text;
ALTER TABLE public.concepts ADD COLUMN IF NOT EXISTS bibliography text[];
ALTER TABLE public.concepts ADD COLUMN IF NOT EXISTS ai_generated boolean NOT NULL DEFAULT true;
ALTER TABLE public.concepts ADD COLUMN IF NOT EXISTS editorial_status editorial_status NOT NULL DEFAULT 'draft';

-- Triggers for Kg Nodes (Optional but helpful for sync)
-- A robust system would use Supabase functions to insert into kg_nodes when a person/concept is created.
