import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as L from 'leaflet';
import { Tasinmaz } from '../../models/tasinmaz.model';

@Component({
  selector: 'app-tasinmaz-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './tasinmaz-list.component.html',
  styleUrls: ['./tasinmaz-list.component.scss']
})
export class TasinmazListComponent implements OnInit, AfterViewInit {
  tasinmazlar: Tasinmaz[] = [
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

  filtreliTasinmazlar: Tasinmaz[] = [];
  aramaMetni: string = '';
  selectedTasinmaz: Tasinmaz | null = null;
  private map!: L.Map;
  private markers: L.Marker[] = [];

  constructor() {
    this.filtreliTasinmazlar = this.tasinmazlar;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
      this.addMarkers();
    }, 100);
  }

  ara(): void {
    if (!this.aramaMetni.trim()) {
      this.filtreliTasinmazlar = this.tasinmazlar;
      return;
    }

    const aramaMetniKucuk = this.aramaMetni.toLowerCase();
    this.filtreliTasinmazlar = this.tasinmazlar.filter(tasinmaz => 
      tasinmaz.il.toLowerCase().includes(aramaMetniKucuk) ||
      tasinmaz.ilce.toLowerCase().includes(aramaMetniKucuk) ||
      tasinmaz.mahalle.toLowerCase().includes(aramaMetniKucuk) ||
      tasinmaz.ada.toLowerCase().includes(aramaMetniKucuk) ||
      tasinmaz.parsel.toLowerCase().includes(aramaMetniKucuk) ||
      tasinmaz.nitelik.toLowerCase().includes(aramaMetniKucuk)
    );
  }

  onSelect(tasinmaz: Tasinmaz): void {
    this.selectedTasinmaz = tasinmaz;
    this.updateMap();
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

  private updateMap(): void {
    if (!this.selectedTasinmaz) return;

    // Önceki markerları temizle
    this.markers.forEach(marker => marker.remove());
    this.markers = [];

    // Yeni marker ekle
    const marker = L.marker([this.selectedTasinmaz.koordinatlar.lat, this.selectedTasinmaz.koordinatlar.lng])
      .bindPopup(`
        <div class="popup-content">
          <h6 class="mb-2">${this.selectedTasinmaz.il} - ${this.selectedTasinmaz.ilce}</h6>
          <p class="mb-1"><strong>Mahalle:</strong> ${this.selectedTasinmaz.mahalle}</p>
          <p class="mb-1"><strong>Ada/Parsel:</strong> ${this.selectedTasinmaz.ada}/${this.selectedTasinmaz.parsel}</p>
          <p class="mb-1"><strong>Nitelik:</strong> ${this.selectedTasinmaz.nitelik}</p>
          <p class="mb-0"><strong>Adres:</strong> ${this.selectedTasinmaz.adres}</p>
        </div>
      `, {
        maxWidth: 300
      })
      .addTo(this.map);

    this.markers.push(marker);
    this.map.setView([this.selectedTasinmaz.koordinatlar.lat, this.selectedTasinmaz.koordinatlar.lng], 15);
  }

  private addMarkers(): void {
    // Tüm taşınmazları haritada göster
    this.tasinmazlar.forEach(tasinmaz => {
      const marker = L.marker([tasinmaz.koordinatlar.lat, tasinmaz.koordinatlar.lng])
        .bindPopup(`
          <div class="popup-content">
            <h6 class="mb-2">${tasinmaz.il} - ${tasinmaz.ilce}</h6>
            <p class="mb-1"><strong>Mahalle:</strong> ${tasinmaz.mahalle}</p>
            <p class="mb-1"><strong>Ada/Parsel:</strong> ${tasinmaz.ada}/${tasinmaz.parsel}</p>
            <p class="mb-1"><strong>Nitelik:</strong> ${tasinmaz.nitelik}</p>
            <p class="mb-0"><strong>Adres:</strong> ${tasinmaz.adres}</p>
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