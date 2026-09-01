# KaimAlSakaleyn: İçerik Mimarisi Raporu

KaimAlSakaleyn projesi, basit bir içerik sitesinden çıkıp **"Dijital Şiî Araştırma Merkezi"** haline getirilmek üzere yeniden yapılandırılmıştır.

## Ana Bilgi Merkezleri
1. **Kur'an Araştırma Merkezi (`/kuran`)**: Ayet mealleri ve tefsir bağlantıları için taslak yapı oluşturuldu.
2. **Hadis Veritabanı (`/hadis`)**: Şiî hadis külliyatı için sened ve derecelendirme (grading) mantığı kuruldu. (Yapay zeka derecelendirmesi kapalıdır).
3. **Nehcü'l-Belâğa (`/nehcul-belaga`)**: Hutbeler, mektuplar ve hikmetli sözler veritabanı olarak parçalandı.
4. **Sahife-i Seccadiye (`/sahife-i-seccadiye`)**: Dua yapısı oluşturuldu.
5. **Kerbelâ Dosyası (`/kerbela`)** ve **Mehdeviyet Araştırmaları (`/mehdeviyet`)**: Tematik araştırma dosyaları haline getirildi.
6. **Şiî Âlimler (`/alimler`)**: 25'ten fazla âlimin taslak kaydı sisteme dahil edildi.

## Veritabanı (Supabase) Yapılandırması
`schema_phase4.sql` dosyası ile:
- `persons`, `concepts`, `books`, `articles`, `hadiths`, `verses`, `sermons` vb. için ayrı tablolar oluşturuldu.
- Tüm içeriklerin statüsünü belirleyen `editorial_status` Enum'ı eklendi.
- AI içerikleri için `ai_generated = true` flag'i zorunlu kılındı.

## Güvenlik ve Doğruluk (Accuracy)
Hiçbir yapay zeka çıktısının gerçekmiş gibi yayına girmemesi için sistem varsayılanı "DRAFT" (taslak) statüsünde çalışmaktadır. Bir içeriğin "PUBLISHED" olabilmesi için `editorialStatus: 'published'` ve `verificationStatus: 'verified'` süreçlerinden geçmesi gerekmektedir.
