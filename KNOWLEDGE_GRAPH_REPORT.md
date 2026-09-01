# KaimAlSakaleyn: Knowledge Graph (Bilgi Grafiği) Raporu

## Knowledge Graph Nedir?
Knowledge Graph, KaimAlSakaleyn sistemindeki tüm varlıkların (Entity) birbirleriyle akıllı şekilde ilişkilendirilmesini sağlayan mimaridir. Önceki yapıda içerikler birbirinden bağımsız makalelerken, yeni yapıda her içerik ağın bir düğümüdür (Node).

## Varlıklar (Entities)
- **Person**: İmamlar, Âlimler
- **Concept**: Ansiklopedik terimler (Örn: İsmet, Gaybet)
- **Book**: Kaynak eserler
- **Hadith / QuranVerse**: Metinler

## İlişki Tipleri (Edges)
Veritabanındaki `kg_edges` tablosu ile kurulan ilişkiler:
- `mentions` (Bahseder)
- `authored_by` (Tarafından yazıldı)
- `quotes` (Alıntılar)
- `historically_related` (Tarihsel olarak ilişkili)

## Geliştirmeler
Frontend tarafında `<KnowledgeGraphLinks />` bileşeni oluşturuldu. Bu bileşen, kullanıcının bulunduğu sayfaya (Örn: İmam Ali sayfası) göre, o varlıkla ilişkili olan:
- Diğer Şahısları (Örn: Hz. Fatıma, İmam Hasan)
- Kavramları (Örn: Gadir, Velayet)
- Kitapları (Örn: Nehcü'l-Belâğa)
- Makaleleri

otomatik olarak bularak "Okumaya Devam Et" (Keşif) bölümünde listeler. Bu, site içi dolaşımı ve SEO internal linking'i dramatik ölçüde artıracaktır.
