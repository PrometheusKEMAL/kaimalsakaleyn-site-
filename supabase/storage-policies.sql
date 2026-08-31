-- KaimAlSakaleyn Storage RLS Policies

-- 1. Storage RLS zaten varsayılan olarak aktiftir, o yüzden alter table komutunu kaldırdık.

-- 2. Herkesin kapak görsellerini ve PDF'leri görebilmesine (okumasına) izin ver
drop policy if exists "Herkes dosyalari gorebilir" on storage.objects;
create policy "Herkes dosyalari gorebilir"
on storage.objects for select
using ( bucket_id in ('covers', 'pdfs') );

-- 3. Sadece Adminlerin dosya yüklemesine izin ver
drop policy if exists "Adminler dosya yukleyebilir" on storage.objects;
drop policy if exists "Kullanicilar dosya yukleyebilir" on storage.objects;
create policy "Adminler dosya yukleyebilir"
on storage.objects for insert
with check ( 
  bucket_id in ('covers', 'pdfs') 
  and exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  )
);

-- 4. Sadece Adminlerin dosya güncelleyebilmesi
drop policy if exists "Adminler dosya guncelleyebilir" on storage.objects;
drop policy if exists "Kullanicilar dosya guncelleyebilir" on storage.objects;
create policy "Adminler dosya guncelleyebilir"
on storage.objects for update
using ( 
  bucket_id in ('covers', 'pdfs') 
  and exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  )
);

-- 5. Sadece Adminlerin dosya silebilmesi
drop policy if exists "Adminler dosya silebilir" on storage.objects;
drop policy if exists "Kullanicilar dosya silebilir" on storage.objects;
create policy "Adminler dosya silebilir"
on storage.objects for delete
using ( 
  bucket_id in ('covers', 'pdfs') 
  and exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  )
);
