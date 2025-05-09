import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ayarlar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0">
                <i class="fas fa-cog me-2"></i>
                Sistem Ayarları
              </h5>
            </div>
            <div class="card-body">
              <!-- Harita Ayarları -->
              <div class="mb-4">
                <h6 class="border-bottom pb-2">
                  <i class="fas fa-map me-2"></i>
                  Harita Ayarları
                </h6>
                <div class="mb-3">
                  <label class="form-label">Varsayılan Zoom Seviyesi</label>
                  <select class="form-select" [(ngModel)]="mapSettings.defaultZoom">
                    <option value="5">5 - Ülke Geneli</option>
                    <option value="7">7 - Bölge</option>
                    <option value="9">9 - İl</option>
                    <option value="12">12 - İlçe</option>
                    <option value="15">15 - Mahalle</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Varsayılan Merkez Koordinatları</label>
                  <div class="row">
                    <div class="col-6">
                      <input type="number" class="form-control" placeholder="Enlem" [(ngModel)]="mapSettings.defaultLat">
                    </div>
                    <div class="col-6">
                      <input type="number" class="form-control" placeholder="Boylam" [(ngModel)]="mapSettings.defaultLng">
                    </div>
                  </div>
                </div>
              </div>

              <!-- Görünüm Ayarları -->
              <div class="mb-4">
                <h6 class="border-bottom pb-2">
                  <i class="fas fa-palette me-2"></i>
                  Görünüm Ayarları
                </h6>
                <div class="mb-3">
                  <label class="form-label">Tema</label>
                  <select class="form-select" [(ngModel)]="displaySettings.theme">
                    <option value="light">Açık Tema</option>
                    <option value="dark">Koyu Tema</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Tablo Satır Sayısı</label>
                  <select class="form-select" [(ngModel)]="displaySettings.tableRows">
                    <option value="10">10 Satır</option>
                    <option value="25">25 Satır</option>
                    <option value="50">50 Satır</option>
                    <option value="100">100 Satır</option>
                  </select>
                </div>
              </div>

              <!-- Bildirim Ayarları -->
              <div class="mb-4">
                <h6 class="border-bottom pb-2">
                  <i class="fas fa-bell me-2"></i>
                  Bildirim Ayarları
                </h6>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" [(ngModel)]="notificationSettings.emailNotifications">
                  <label class="form-check-label">E-posta Bildirimleri</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" [(ngModel)]="notificationSettings.browserNotifications">
                  <label class="form-check-label">Tarayıcı Bildirimleri</label>
                </div>
              </div>

              <!-- Kaydet Butonu -->
              <div class="text-end">
                <button class="btn btn-primary" (click)="saveSettings()">
                  <i class="fas fa-save me-2"></i>
                  Ayarları Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .form-label {
      font-weight: 500;
    }
    
    h6 {
      color: #666;
      margin-bottom: 1rem;
    }
    
    .form-check-label {
      user-select: none;
    }
  `]
})
export class AyarlarComponent {
  mapSettings = {
    defaultZoom: '7',
    defaultLat: 39.9334,
    defaultLng: 32.8597
  };

  displaySettings = {
    theme: 'light',
    tableRows: '25'
  };

  notificationSettings = {
    emailNotifications: true,
    browserNotifications: false
  };

  saveSettings(): void {
    // Burada ayarları kaydetme işlemi yapılacak
    console.log('Ayarlar kaydedildi:', {
      map: this.mapSettings,
      display: this.displaySettings,
      notifications: this.notificationSettings
    });
  }
} 