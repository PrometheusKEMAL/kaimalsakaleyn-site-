-- KaimAlSakaleyn Database Schema

-- 1. Create profiles table (extends auth.users)
create table public.profiles (
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
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

create policy "Admins can update all profiles."
  on profiles for update
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role = 'admin'
    )
  );

-- 2. Create articles table
create table public.articles (
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
create policy "Published articles are viewable by everyone."
  on articles for select
  using ( status = 'published' );

create policy "Admins and moderators can view all articles."
  on articles for select
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

create policy "Admins and moderators can insert articles."
  on articles for insert
  with check ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

create policy "Admins and moderators can update articles."
  on articles for update
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

create policy "Admins and moderators can delete articles."
  on articles for delete
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

-- 3. Create books table (Library)
create table public.books (
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
create policy "Published books are viewable by everyone."
  on books for select
  using ( status = 'published' );

create policy "Admins and moderators can view all books."
  on books for select
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

create policy "Admins and moderators can insert books."
  on books for insert
  with check ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

create policy "Admins and moderators can update books."
  on books for update
  using ( 
    exists (
      select 1 from profiles where id = auth.uid() and role in ('admin', 'moderator')
    )
  );

create policy "Admins and moderators can delete books."
  on books for delete
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

create trigger handle_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create trigger handle_articles_updated_at
  before update on public.articles
  for each row execute procedure public.handle_updated_at();

create trigger handle_books_updated_at
  before update on public.books
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

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 6. Storage Buckets (Optional: run these manually in Supabase Dashboard if they fail here)
insert into storage.buckets (id, name, public) values ('covers', 'covers', true) on conflict do nothing;
insert into storage.buckets (id, name, public) values ('pdfs', 'pdfs', true) on conflict do nothing;
-- 7. Create scholars table (Alimler / Muellifler)
create table public.scholars (
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
create policy "Published scholars viewable by everyone" on scholars for select using (status = 'published');

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
create table public.concepts (
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
create policy "Published concepts viewable by everyone" on concepts for select using (status = 'published');

-- 10. Create special dossiers (Ozel Dosyalar)
create table public.dossiers (
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
create policy "Published dossiers viewable by everyone" on dossiers for select using (status = 'published');

-- 11. Verses (Ayetler)
create table public.verses (
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
create policy "Published verses viewable by everyone" on verses for select using (status = 'published');

-- 12. Hadiths (Rivayetler)
create table public.hadiths (
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
create policy "Published hadiths viewable by everyone" on hadiths for select using (status = 'published');

-- 13. Citations (Dipnot / Kaynakca)
create table public.citations (
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
create policy "Citations viewable by everyone" on citations for select using (true);
