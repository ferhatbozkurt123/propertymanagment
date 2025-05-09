import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { Tasinmaz } from '../../models/tasinmaz.model';

// Leaflet icon hatası için gerekli
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-harita',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0">
                <i class="fas fa-map-marked-alt me-2"></i>
                Taşınmaz Haritası
              </h5>
            </div>
            <div class="card-body p-0">
              <div id="map" style="height: 700px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #map {
      width: 100%;
      height: 700px;
      border-radius: 0 0 0.25rem 0.25rem;
    }
  `]
})
export class HaritaComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  private markers: L.Marker[] = [];

  // Örnek veri
  private tasinmazlar: Tasinmaz[] = [
    {
      id: 1,
      il: 'İstanbul',
      ilce: 'Kadıköy',
      mahalle: 'Caddebostan',
      ada: '101',
      parsel: '5',
      nitelik: 'Apartman',
      adres: 'Bağdat Caddesi No: 123',
      koordinatlar: { lat: 40.9632, lng: 29.0638 },
      durum: 'Aktif',
      kayitTarihi: new Date('2024-01-15'),
      olusturmaTarihi: new Date('2024-01-15'),
      guncellemeTarihi: new Date('2024-02-01')
    },
    {
      id: 2,
      il: 'Ankara',
      ilce: 'Çankaya',
      mahalle: 'Kızılay',
      ada: '205',
      parsel: '12',
      nitelik: 'İş Merkezi',
      adres: 'Atatürk Bulvarı No: 456',
      koordinatlar: { lat: 39.9208, lng: 32.8541 },
      durum: 'Aktif',
      kayitTarihi: new Date('2024-02-01'),
      olusturmaTarihi: new Date('2024-02-01')
    },
    {
      id: 3,
      il: 'İzmir',
      ilce: 'Konak',
      mahalle: 'Alsancak',
      ada: '308',
      parsel: '8',
      nitelik: 'Villa',
      adres: 'Kordon Boyu No: 789',
      koordinatlar: { lat: 38.4189, lng: 27.1287 },
      durum: 'Pasif',
      kayitTarihi: new Date('2024-02-20'),
      olusturmaTarihi: new Date('2024-02-20'),
      guncellemeTarihi: new Date('2024-03-01')
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
      this.addMarkers();
    }, 100);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.9334, 32.8597],
      zoom: 6
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private addMarkers(): void {
    // Önceki markerları temizle
    this.markers.forEach(marker => marker.remove());
    this.markers = [];

    // Yeni markerları ekle
    this.tasinmazlar.forEach(tasinmaz => {
      const marker = L.marker([tasinmaz.koordinatlar.lat, tasinmaz.koordinatlar.lng])
        .bindPopup(`
          <div class="popup-content">
            <h6 class="mb-2">${tasinmaz.il} - ${tasinmaz.ilce}</h6>
            <p class="mb-1"><strong>Mahalle:</strong> ${tasinmaz.mahalle}</p>
            <p class="mb-1"><strong>Ada/Parsel:</strong> ${tasinmaz.ada}/${tasinmaz.parsel}</p>
            <p class="mb-1"><strong>Nitelik:</strong> ${tasinmaz.nitelik}</p>
            <p class="mb-0"><strong>Durum:</strong> 
              <span class="badge ${tasinmaz.durum === 'Aktif' ? 'bg-success' : 'bg-danger'}">
                ${tasinmaz.durum}
              </span>
            </p>
          </div>
        `, {
          maxWidth: 300
        })
        .addTo(this.map);
      
      this.markers.push(marker);
    });

    // Tüm markerları görecek şekilde haritayı ayarla
    if (this.markers.length > 0) {
      const group = L.featureGroup(this.markers);
      this.map.fitBounds(group.getBounds().pad(0.1));
    }
  }
} 