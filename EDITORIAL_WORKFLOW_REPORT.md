# KaimAlSakaleyn: Editoryal İş Akışı (Workflow) Raporu

KaimAlSakaleyn'in veri doğruluğunu ve akademik standartlarını korumak için, sisteme giren her bilgi parçası katı bir editoryal iş akışına bağlanmıştır.

## İçerik Statüleri (`editorial_status`)
1. **DRAFT (Taslak)**: Yapay zeka tarafından oluşturulan veya yazarın henüz bitirmediği içerikler.
2. **RESEARCHING (Araştırılıyor)**: İçeriğin kaynak taramasının yapıldığı aşama.
3. **SOURCE_REVIEW (Kaynak Kontrolü)**: Eklenen birincil ve ikincil kaynakların referans uygunluğunun denetlendiği aşama.
4. **EDITOR_REVIEW (Editör Onayı)**: Son okuma ve usul (Şiî düşünce hassasiyetleri) kontrolü.
5. **APPROVED (Onaylandı)**: Yayına hazır.
6. **PUBLISHED (Yayınlandı)**: Sitede görünür durumda.
7. **ARCHIVED (Arşivlendi)**: Yayından kaldırılmış.

## AI Kısıtlamaları ve Güvenlik
Yapay zeka (AI) hiçbir şekilde gerçekmiş gibi sahte hadis, kaynak, sayfa numarası veya ISBN uyduramaz. Sistemdeki tüm AI içeriklerinde `aiGenerated = true` alanı bulunur. AI'ın kaynağından emin olamadığı alanlarda metin içine `[VERIFY SOURCE]` etiketi atılır. Bu etiket temizlenmeden içerik `PUBLISHED` statüsüne alınamaz.

## Kaynak Yönetimi
Artık veritabanında metin serbest (plain text) kaynak yazımı yerine, merkezi bir `sources` tablosu bulunmaktadır. Bir kitap, bir hadis veya bir makale, kaynaklarına referans kimlikleriyle (ID) bağlanır ve birleştirilmiş dipnot sistemi (Citation) ile görüntülenir.
