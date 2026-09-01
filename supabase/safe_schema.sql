-- KaimAlSakaleyn Database Schema

-- 1. Create profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid not null references auth.users on delete cascade,
  email text not null,
  full_name text,
  role text not null default 'user'::text check (role in ('admin', 'moderator', 'user')),
  status text not null default 'active'::text check (status in ('active', 'blocked')),
  created_at timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone('utc'::text, now()),
  primary key (id)
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

-- Profile policies
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON profiles;
CREATE POLICY "Public profiles are viewable by everyone." ON profiles for select
  using ( true );

DROP POLICY IF EXISTS "Users can insert their own profile." ON profiles;
CREATE POLICY "Users can insert their own profile." ON profiles for insert
  with check ( auth.uid() = id );

DROP POLICY IF EXISTS "Users can update own profile." ON profiles;
CREATE POLICY "Users can update own profile." ON profiles for update
  using ( auth.uid() = id );

DROP POLICY IF EXISTS "Admins can update all profiles." ON profiles;
CREATE POLICY "Admins can update all profiles." ON profiles for update
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role = 'admin'
    )
  );

-- 2. Create articles table
CREATE TABLE IF NOT EXISTS public.articles (
  id uuid not null default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null,
  cover_image text,
  category text not null check (category in ('tefekkur', 'ehlibeyt', 'kuran', 'irfan')),
  status text not null default 'draft'::text check (status in ('draft', 'published')),
  views integer not null default 0,
  seo_title text,
  seo_description text,
  canonical_url text,
  og_title text,
  og_description text,
  og_image text,
  no_index boolean not null default false,
  no_follow boolean not null default false,
  author_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone('utc'::text, now()),
  primary key (id)
);

-- Enable RLS for articles
alter table public.articles enable row level security;

-- Article policies
DROP POLICY IF EXISTS "Published articles are viewable by everyone." ON articles;
CREATE POLICY "Published articles are viewable by everyone." ON articles for select
  using ( status = 'published' );

DROP POLICY IF EXISTS "Admins and moderators can view all articles." ON articles;
CREATE POLICY "Admins and moderators can view all articles." ON articles for select
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

DROP POLICY IF EXISTS "Admins and moderators can insert articles." ON articles;
CREATE POLICY "Admins and moderators can insert articles." ON articles for insert
  with check ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

DROP POLICY IF EXISTS "Admins and moderators can update articles." ON articles;
CREATE POLICY "Admins and moderators can update articles." ON articles for update
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

DROP POLICY IF EXISTS "Admins and moderators can delete articles." ON articles;
CREATE POLICY "Admins and moderators can delete articles." ON articles for delete
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

-- 3. Create books table (Library)
CREATE TABLE IF NOT EXISTS public.books (
  id uuid not null default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  author text not null,
  description text,
  cover_image text,
  pdf_url text,
  category text not null check (category in ('dua', 'hadis', 'akaid', 'tarih')),
  language text not null check (language in ('turkce', 'arapca', 'farsça', 'arapca-turkce')),
  status text not null default 'draft'::text check (status in ('draft', 'published')),
  seo_title text,
  seo_description text,
  canonical_url text,
  og_title text,
  og_description text,
  og_image text,
  no_index boolean not null default false,
  no_follow boolean not null default false,
  uploader_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone('utc'::text, now()),
  primary key (id)
);

-- Enable RLS for books
alter table public.books enable row level security;

-- Book policies
DROP POLICY IF EXISTS "Published books are viewable by everyone." ON books;
CREATE POLICY "Published books are viewable by everyone." ON books for select
  using ( status = 'published' );

DROP POLICY IF EXISTS "Admins and moderators can view all books." ON books;
CREATE POLICY "Admins and moderators can view all books." ON books for select
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

DROP POLICY IF EXISTS "Admins and moderators can insert books." ON books;
CREATE POLICY "Admins and moderators can insert books." ON books for insert
  with check ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

DROP POLICY IF EXISTS "Admins and moderators can update books." ON books;
CREATE POLICY "Admins and moderators can update books." ON books for update
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

DROP POLICY IF EXISTS "Admins and moderators can delete books." ON books;
CREATE POLICY "Admins and moderators can delete books." ON books for delete
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

-- 4. Triggers for updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

DROP TRIGGER IF EXISTS handle_profiles_updated_at ON public.profiles;
CREATE TRIGGER handle_profiles_updated_at before update ON public.profiles
  for each row execute procedure public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_articles_updated_at ON public.articles;
CREATE TRIGGER handle_articles_updated_at before update ON public.articles
  for each row execute procedure public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_books_updated_at ON public.books;
CREATE TRIGGER handle_books_updated_at before update ON public.books
  for each row execute procedure public.handle_updated_at();

-- 5. Trigger for new user profile creation
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role, status)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', 'user', 'active');
  return new;
end;
$$ language plpgsql security definer;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created after insert ON auth.users
  for each row execute procedure public.handle_new_user();

-- 6. Storage Buckets (Optional: run these manually in Supabase Dashboard if they fail here)
insert into storage.buckets (id, name, public) values ('covers', 'covers', true) on conflict do nothing;
insert into storage.buckets (id, name, public) values ('pdfs', 'pdfs', true) on conflict do nothing;
-- 7. Create scholars table (Alimler / Muellifler)
CREATE TABLE IF NOT EXISTS public.scholars (
  id uuid not null default gen_random_uuid(),
  name text not null,
  arabic_name text,
  slug text not null unique,
  birth_date text,
  death_date text,
  era text,
  bio text,
  scholarly_fields text[],
  teachers text[],
  students text[],
  status text not null default 'draft'::text check (status in ('draft', 'review', 'published', 'archived')),
  created_at timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone('utc'::text, now()),
  primary key (id)
);
alter table public.scholars enable row level security;
DROP POLICY IF EXISTS "Published scholars viewable by everyone" ON scholars;
CREATE POLICY "Published scholars viewable by everyone" ON scholars for select using (status = 'published');

-- 8. Alter books table for academic metadata
alter table public.books add column if not exists original_title text;
alter table public.books add column if not exists arabic_title text;
alter table public.books add column if not exists translator text;
alter table public.books add column if not exists muhakkik text;
alter table public.books add column if not exists publisher text;
alter table public.books add column if not exists edition text;
alter table public.books add column if not exists publish_year text;
alter table public.books add column if not exists original_language text;
alter table public.books add column if not exists volume_count integer;
alter table public.books add column if not exists page_count integer;
alter table public.books add column if not exists isbn text;
alter table public.books add column if not exists source_url text;
alter table public.books add column if not exists source_verified boolean not null default false;
alter table public.books add column if not exists copyright_status text check (copyright_status in ('public_domain', 'open_license', 'permission_granted', 'copyrighted', 'unknown'));
alter table public.books add column if not exists verification_status text check (verification_status in ('verified', 'partial', 'unverified')) default 'unverified';

-- 9. Create concepts (Ansiklopedi)
CREATE TABLE IF NOT EXISTS public.concepts (
  id uuid not null default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  definition text not null,
  etymology text,
  quranic_usage text,
  hadith_usage text,
  historical_development text,
  theological_aspect text,
  misconceptions text,
  status text not null default 'draft'::text check (status in ('draft', 'review', 'published', 'archived')),
  created_at timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone('utc'::text, now()),
  primary key (id)
);
alter table public.concepts enable row level security;
DROP POLICY IF EXISTS "Published concepts viewable by everyone" ON concepts;
CREATE POLICY "Published concepts viewable by everyone" ON concepts for select using (status = 'published');

-- 10. Create special dossiers (Ozel Dosyalar)
CREATE TABLE IF NOT EXISTS public.dossiers (
  id uuid not null default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  content text,
  status text not null default 'draft'::text check (status in ('draft', 'review', 'published', 'archived')),
  created_at timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone('utc'::text, now()),
  primary key (id)
);
alter table public.dossiers enable row level security;
DROP POLICY IF EXISTS "Published dossiers viewable by everyone" ON dossiers;
CREATE POLICY "Published dossiers viewable by everyone" ON dossiers for select using (status = 'published');

-- 11. Verses (Ayetler)
CREATE TABLE IF NOT EXISTS public.verses (
  id uuid not null default gen_random_uuid(),
  surah integer not null,
  verse integer not null,
  arabic_text text not null,
  turkish_meal text not null,
  meal_author text,
  topics text[],
  status text not null default 'draft'::text check (status in ('draft', 'review', 'published', 'archived')),
  primary key (id)
);
alter table public.verses enable row level security;
DROP POLICY IF EXISTS "Published verses viewable by everyone" ON verses;
CREATE POLICY "Published verses viewable by everyone" ON verses for select using (status = 'published');

-- 12. Hadiths (Rivayetler)
CREATE TABLE IF NOT EXISTS public.hadiths (
  id uuid not null default gen_random_uuid(),
  arabic_text text,
  turkish_text text not null,
  narrator text,
  source_book_id uuid references public.books(id),
  volume text,
  page text,
  chapter text,
  hadith_number text,
  topics text[],
  source_verified boolean not null default false,
  status text not null default 'draft'::text check (status in ('draft', 'review', 'published', 'archived')),
  primary key (id)
);
alter table public.hadiths enable row level security;
DROP POLICY IF EXISTS "Published hadiths viewable by everyone" ON hadiths;
CREATE POLICY "Published hadiths viewable by everyone" ON hadiths for select using (status = 'published');

-- 13. Citations (Dipnot / Kaynakca)
CREATE TABLE IF NOT EXISTS public.citations (
  id uuid not null default gen_random_uuid(),
  entity_type text not null check (entity_type in ('article', 'concept', 'scholar', 'dossier')),
  entity_id uuid not null,
  author text,
  work text,
  volume text,
  page text,
  chapter text,
  hadith_number text,
  edition text,
  publisher text,
  publish_year text,
  source_url text,
  verification_status text check (verification_status in ('verified', 'partial', 'unverified')) default 'unverified',
  primary key (id)
);
alter table public.citations enable row level security;
DROP POLICY IF EXISTS "Citations viewable by everyone" ON citations;
CREATE POLICY "Citations viewable by everyone" ON citations for select using (true);


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


-- KaimAlSakaleyn Storage RLS Policies

-- 1. Storage RLS zaten varsayılan olarak aktiftir, o yüzden alter table komutunu kaldırdık.

-- 2. Herkesin kapak görsellerini ve PDF'leri görebilmesine (okumasına) izin ver
drop policy if exists "Herkes dosyalari gorebilir" on storage.objects;
DROP POLICY IF EXISTS "Herkes dosyalari gorebilir" ON storage.objects;
CREATE POLICY "Herkes dosyalari gorebilir" ON storage.objects for select
using ( bucket_id in ('covers', 'pdfs') );

-- 3. Sadece Adminlerin dosya yüklemesine izin ver
drop policy if exists "Adminler dosya yukleyebilir" on storage.objects;
drop policy if exists "Kullanicilar dosya yukleyebilir" on storage.objects;
DROP POLICY IF EXISTS "Adminler dosya yukleyebilir" ON storage.objects;
CREATE POLICY "Adminler dosya yukleyebilir" ON storage.objects for insert
with check ( 
  bucket_id in ('covers', 'pdfs') 
  and exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  )
);

-- 4. Sadece Adminlerin dosya güncelleyebilmesi
drop policy if exists "Adminler dosya guncelleyebilir" on storage.objects;
drop policy if exists "Kullanicilar dosya guncelleyebilir" on storage.objects;
DROP POLICY IF EXISTS "Adminler dosya guncelleyebilir" ON storage.objects;
CREATE POLICY "Adminler dosya guncelleyebilir" ON storage.objects for update
using ( 
  bucket_id in ('covers', 'pdfs') 
  and exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  )
);

-- 5. Sadece Adminlerin dosya silebilmesi
drop policy if exists "Adminler dosya silebilir" on storage.objects;
drop policy if exists "Kullanicilar dosya silebilir" on storage.objects;
DROP POLICY IF EXISTS "Adminler dosya silebilir" ON storage.objects;
CREATE POLICY "Adminler dosya silebilir" ON storage.objects for delete
using ( 
  bucket_id in ('covers', 'pdfs') 
  and exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  )
);
