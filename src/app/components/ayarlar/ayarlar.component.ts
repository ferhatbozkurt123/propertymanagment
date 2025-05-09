import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AyarlarModel {
  haritaZoomSeviyesi: number;
  varsayilanKonum: {
    lat: number;
    lng: number;
  };
  listeSayfaBasinaKayit: number;
  karanlikTema: boolean;
  bildirimlerAktif: boolean;
}

@Component({
  selector: 'app-ayarlar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ayarlar.component.html',
  styleUrls: ['./ayarlar.component.scss']
})
export class AyarlarComponent implements OnInit {
  ayarlar: AyarlarModel = {
    haritaZoomSeviyesi: 6,
    varsayilanKonum: {
      lat: 39.9334,
      lng: 32.8597
    },
    listeSayfaBasinaKayit: 10,
    karanlikTema: false,
    bildirimlerAktif: true
  };

  constructor() {}

  ngOnInit(): void {
    // LocalStorage'dan ayarları yükle
    const kayitliAyarlar = localStorage.getItem('tasinmazAyarlar');
    if (kayitliAyarlar) {
      this.ayarlar = JSON.parse(kayitliAyarlar);
    }
  }

  ayarlariKaydet(): void {
    localStorage.setItem('tasinmazAyarlar', JSON.stringify(this.ayarlar));
    // Başarılı mesajı göster
    alert('Ayarlar başarıyla kaydedildi!');
  }

  varsayilanAyarlariYukle(): void {
    this.ayarlar = {
      haritaZoomSeviyesi: 6,
      varsayilanKonum: {
        lat: 39.9334,
        lng: 32.8597
      },
      listeSayfaBasinaKayit: 10,
      karanlikTema: false,
      bildirimlerAktif: true
    };
    this.ayarlariKaydet();
  }
} 