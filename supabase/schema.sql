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
