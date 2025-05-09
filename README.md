# Taşınmaz Yönetim Sistemi

Bu proje, taşınmaz (gayrimenkul) varlıkların yönetimi için geliştirilmiş bir web uygulamasıdır.

## 🚀 Özellikler

- Taşınmaz varlıkların listelenmesi ve yönetimi
- Detaylı taşınmaz bilgi görüntüleme
- Kullanıcı yetkilendirme sistemi
- Harita üzerinde taşınmaz lokasyonları

## 🛠️ Teknolojiler

- React.js
- TypeScript
- Tailwind CSS
- Leaflet (Harita entegrasyonu için)
- Axios (API istekleri için)

## 📋 Gereksinimler

- Node.js (v14.0.0 veya üzeri)
- npm veya yarn paket yöneticisi

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