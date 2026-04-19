# Korudent Next.js Proje Kılavuzu

## Temel Komutlar
- **Geliştirme:** `npm run dev` (Varsayılan port: 3005)
- **Derleme:** `npm run build`
- **Tip Kontrolü:** `npx tsc --noEmit`
- **Lint Kontrolü:** `npm run lint`
- **Veritabanı Senkronize:** `npx prisma db push`
- **Prisma Client Üret:** `npx prisma generate`

## Kodlama Kuralları
1. **Önce Kontrol:** Herhangi bir kodu kullanıcıya sunmadan önce mutlaka `npx tsc --noEmit` ve `npm run build` ile yerel hata kontrolü yap.
2. **Server Components:** Varsayılan olarak tüm sayfaları Server Component yap. Sadece etkileşim (onClick, useState vb.) gerekiyorsa `'use client'` kullan ve etkileşimli kısmı en küçük bileşene (component) indirge.
3. **Tasarım (WOW Effect):**
   - Teal (#0891b2) ve Slate (Slate-900) renk paletini kullan.
   - Glassmorphism (bkz. `backdrop-blur-md`) efektlerinden kaçınma.
   - Lucide-react ikonlarını kullan.
   - Framer Motion yerine hafif olması için Tailwind animasyonlarını tercih et.
4. **SEO:** Her sayfanın `metadata` nesnesini mutlaka doldur. `generateClinicSchema()` fonksiyonunu ana sayfalarda çağır.

## Dosya Yapısı
- `src/app/(main)`: Hasta arayüzü sayfaları.
- `src/app/(admin)`: Yönetim paneli sayfaları.
- `src/components`: Tekrar kullanılabilir UI bileşenleri.
- `src/lib`: Veritabanı, SEO ve Güvenlik yardımcıları.
