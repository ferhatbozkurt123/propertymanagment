🏠 Taşınmaz Varlık Yönetim Sistemi
Bu proje, taşınmaz (gayrimenkul) varlıkların etkin yönetimi için geliştirilmiş web tabanlı bir uygulamadır. Kullanıcılar, sisteme tanımlanan taşınmazları detaylı bir şekilde görüntüleyebilir, güncelleyebilir ve harita üzerinde konumlarını takip edebilir.

🚀 Özellikler
✅ Taşınmaz varlıkların listelenmesi, eklenmesi, silinmesi ve güncellenmesi

🧾 Detaylı taşınmaz bilgilerini görme (konum, tip, değer, tapu bilgisi vb.)

🔐 Rol tabanlı kullanıcı yetkilendirme (Admin, Kullanıcı)

🗺️ Harita üzerinden konum bazlı görüntüleme (OpenStreetMap veya Google Maps)

🗂️ Taşınmazlara belge veya medya ekleyebilme (isteğe bağlı modül)

📊 Taşınmaz değer karşılaştırması için harita bazlı karşılaştırma broşürü

🛠️ Kullanılan Teknolojiler
Backend
.NET 7 Web API (C#)

Entity Framework Core (Code First yaklaşımı)

SQL Server – Veritabanı yönetimi

Frontend
Angular 15+ – SPA yapısı

Tailwind CSS – Modern, hızlı stilleme

Leaflet.js / Google Maps API – Harita entegrasyonu

Axios – API istekleri (Angular’da HttpClient ile karşılanabilir)

🧱 Mimarî Yapı
Katmanlı mimari uygulanmıştır:

API Katmanı (.NET) → HTTP endpoint’leri

Business Katmanı → İş kuralları ve servisler

Data Katmanı → Entity Framework ile SQL bağlantısı

Angular Frontend → Kullanıcı arayüzü, komponent bazlı yapı

💾 Veritabanı Yapısı
Taşınmaz (Property)

Id, Adres, İl/İlçe, Tip, Metrekare, Değer, Konum (latitude/longitude)

Kullanıcı (User)

Id, Ad, Email, Şifre (hashed), Rol

Roller (Roles)

Admin, Kullanıcı

🧪 Gereksinimler
Node.js v14.0.0 veya üzeri (Angular için)

.NET SDK v7.0 veya üzeri

SQL Server

Paket yöneticisi olarak npm veya yarn

Harita hizmeti için API anahtarı (gerekiyorsa)
## 💻 Kurulum

1. Projeyi klonlayın:
```bash
git clone [proje-repo-url]
```

2. Proje dizinine gidin:
```bash
cd tasinmaz-yonetim-ui
```

3. Gerekli bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
```

5. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresini açın.

## 🔧 Ortam Değişkenleri

Projeyi çalıştırmadan önce `.env` dosyası oluşturun ve aşağıdaki değişkenleri ayarlayın:

```env
VITE_API_URL=http://localhost:8080/api
```

## 📝 Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

## 👥 Katkıda Bulunma

1. Bu depoyu fork edin
2. Feature branch'inizi oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inize push edin (`git push origin feature/AmazingFeature`)
5. Bir Pull Request oluşturun 
