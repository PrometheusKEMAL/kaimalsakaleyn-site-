-- KaimAlSakaleyn Database Schema Phase 3: Source Intelligence & Ingestion System

-- 1. Source Registry
CREATE TABLE IF NOT EXISTS public.source_registry (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  domain text NOT NULL UNIQUE,
  base_url text NOT NULL,
  source_type text NOT NULL CHECK (source_type IN ('official_institution', 'digital_library', 'university', 'publisher', 'manuscript_library', 'encyclopedia', 'scholarly_database', 'book_catalog', 'open_archive', 'personal_site', 'unknown')),
  language text,
  country text,
  tradition text, -- e.g., 'Shii', 'Sunni', 'Academic'
  reliability_score integer NOT NULL DEFAULT 50 CHECK (reliability_score >= 0 AND reliability_score <= 100),
  trust_level text NOT NULL DEFAULT 'C' CHECK (trust_level IN ('A', 'B', 'C', 'D')),
  is_official boolean NOT NULL DEFAULT false,
  is_primary_source boolean NOT NULL DEFAULT false,
  allows_metadata boolean NOT NULL DEFAULT true,
  allows_full_text boolean NOT NULL DEFAULT false,
  allows_download boolean NOT NULL DEFAULT false,
  copyright_notes text,
  robots_policy text, -- 'respect', 'ignore' (usually respect)
  enabled boolean NOT NULL DEFAULT true,
  last_checked_at timestamp with time zone,
  notes text,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  PRIMARY KEY (id)
);

-- 2. Book Identity (Canonical Mapping)
CREATE TABLE IF NOT EXISTS public.book_identity (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  canonical_title text NOT NULL,
  arabic_canonical_title text,
  alternate_titles text[],
  normalized_author text,
  PRIMARY KEY (id)
);

-- 3. Author Aliases
CREATE TABLE IF NOT EXISTS public.author_aliases (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  canonical_name text NOT NULL,
  arabic_canonical_name text,
  aliases text[],
  PRIMARY KEY (id)
);

-- 4. Ingestion Queue (Review Queue)
CREATE TABLE IF NOT EXISTS public.ingestion_queue (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  entity_type text NOT NULL CHECK (entity_type IN ('book', 'article', 'concept', 'scholar', 'hadith')),
  source_url text NOT NULL,
  source_id uuid REFERENCES public.source_registry(id),
  extracted_data jsonb NOT NULL, -- The raw normalized data extracted
  confidence_score integer NOT NULL DEFAULT 0 CHECK (confidence_score >= 0 AND confidence_score <= 100),
  status text NOT NULL DEFAULT 'needs_review' CHECK (status IN ('discovered', 'parsed', 'needs_review', 'verified', 'approved', 'rejected', 'archived')),
  duplicate_of uuid, -- Reference to existing entity ID if possible duplicate
  conflict_detected boolean NOT NULL DEFAULT false,
  admin_notes text,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  PRIMARY KEY (id)
);

-- 5. Field-Level Provenance (Source Evidence)
CREATE TABLE IF NOT EXISTS public.field_provenance (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  entity_type text NOT NULL, -- 'book', 'scholar', etc.
  entity_id uuid NOT NULL, -- ID of the book/scholar
  field_name text NOT NULL, -- e.g., 'page_count', 'publish_year'
  field_value text NOT NULL,
  source_id uuid REFERENCES public.source_registry(id),
  source_url text NOT NULL,
  confidence integer NOT NULL DEFAULT 0,
  retrieved_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  PRIMARY KEY (id)
);

-- 6. Add status and verification fields to existing tables
DO $$
BEGIN
  -- Add review_status to books if not exists
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='books' AND column_name='review_status') THEN
    ALTER TABLE public.books ADD COLUMN review_status text NOT NULL DEFAULT 'published' CHECK (review_status IN ('draft', 'review_required', 'published', 'rejected'));
  END IF;

  -- Add verification_score to books
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='books' AND column_name='verification_score') THEN
    ALTER TABLE public.books ADD COLUMN verification_score integer DEFAULT 0 CHECK (verification_score >= 0 AND verification_score <= 100);
  END IF;
END $$;
