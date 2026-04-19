# Dr. Sertaç Kızılkaya Next.js Web Sitesi & Admin Paneli

Bu proje, Klinik ve blog yönetimini içeren SEO odaklı, hızlı ve yüksek performanslı kurumsal bir Next.js yapısıdır.

## Özellikler
- **Next.js 15 App Router** tabanlı Server Components (Hızlı LCP, sıfır JavaScript yükü).
- **Prisma & MySQL** ile SQL Enjeksiyonlarına tam kapalı güvenli veritabanı bağlantısı.
- **Sharp Modülü** ile Max 1 MB WebP Otomatik Görsel Optimizasyonu ve Yeniden Boyutlandırma.
- **TipTap Editör** (H1-H6, Liste, Link, Resim destekli SEO uyumlu WYSIWYG metin editörü).
- **Otomatik SEO:** Dinamik Sitemap, Schema.org verileri, robots.txt, otomatik meta etiket ve canonical üretimi.
- **Güvenli Yönetim Paneli:** JWT tabanlı Admin girişi ve Rate Limiting (Brute Force koruması).

## Sistem Gereksinimleri
- Node.js v18.17+
- MySQL veya MariaDB Veritabanı

## Kurulum Talimatları (Lokal / Sunucu)
1. **Bağımlılıkları kurun:**  
   Klasör dizininde terminali açıp şu komutu verin:
   ```bash
   npm install
   ```
2. **Çevresel Değişkenleri Ayarlayın:**  
   Ana dizinde oluşturulan `.env.example` dosyasının adını sadece `.env` olarak düzenleyin. İçine kendi MySQL (MAMP veya cPanel Node) şifre ve bağlantılarınızı yazın.

3. **Veritabanı Tablolarını Oluşturun:**  
   Prisma Schema üzerinden veritabanına tabloları basmak (Push etmek) için:
   ```bash
   npx prisma db push
   ```

4. **Projeyi Başlatın (Geliştirme Ortamı İçin):**  
   ```bash
   npm run dev
   ```
   *Tarayıcıda http://localhost:3000 üzerinden görebilirsiniz.*

## Production (Canlıya Alma / FTP / Vercel vb.) Yüklemesi
Web sitenizi asıl yayına alırken;
1. `npm run build` komutunu girin. Bu komut siteyi optimize eder ve Next.js'in en hızlı üretim dosyalarını (`.next/` klasörüne) oluşturur.
2. cPanel / Plesk panellerinde "Setup Node.js App" kısmından başlangıç dosyası olarak bunu verebilir veya Vercel platformuna Github üzerinden bağlayarak bedavaya host edebilirsiniz. Sadece FTP ile `.html/.php` atmak gibi değildir, arkaplanda Node.js çalışmalıdır.

## Geliştirici - Klasör Yapısı
- `/src/app/(admin)` : Sadece yöneticilerin göreceği Admin paneli ekranları.
- `/src/app/(main)` : Hastaların göreceği gerçek diş kliniği web tasarımı.
- `/src/lib/` : Görsel işleme (`imageProcessor.ts`), JWT otorizasyonu ve Prisma Schema işlemleri burada bulunur.
- `/src/components/` : Sitede tekrar tekrar kullanılacak butonlar, tablolar ve layout kısımları.
