import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { Tasinmaz } from '../../models/tasinmaz.model';

@Component({
  selector: 'app-tasinmaz-form',
  templateUrl: './tasinmaz-form.component.html',
  styleUrls: ['./tasinmaz-form.component.scss']
})
export class TasinmazFormComponent implements OnInit, AfterViewInit {
  @Input() modalId: string = 'tasinmazFormModal';
  @Input() isEditMode: boolean = false;
  @Input() tasinmaz?: Tasinmaz;
  @Output() formSubmit = new EventEmitter<Tasinmaz>();

  tasinmazForm: FormGroup;
  isSubmitting: boolean = false;
  map: L.Map | null = null;
  marker: L.Marker | null = null;
  defaultLocation: L.LatLngTuple = [39.9334, 32.8597]; // Ankara'nın koordinatları

  constructor(private fb: FormBuilder) {
    this.tasinmazForm = this.fb.group({
      id: [null],
      il: ['', Validators.required],
      ilce: ['', Validators.required],
      mahalle: ['', Validators.required],
      ada: ['', Validators.required],
      parsel: ['', Validators.required],
      nitelik: ['', Validators.required],
      boylam: [null, [Validators.required, Validators.min(-180), Validators.max(180)]],
      enlem: [null, [Validators.required, Validators.min(-90), Validators.max(90)]]
    });
  }

  ngOnInit(): void {
    if (this.isEditMode && this.tasinmaz) {
      this.tasinmazForm.patchValue(this.tasinmaz);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  private initMap(): void {
    if (!this.map && document.getElementById('formMap')) {
      const initialLocation: L.LatLngTuple = this.isEditMode && this.tasinmaz 
        ? [this.tasinmaz.enlem, this.tasinmaz.boylam]
        : this.defaultLocation;

      this.map = L.map('formMap').setView(initialLocation, this.isEditMode ? 15 : 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      // Haritaya tıklama olayı ekle
      this.map.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        this.updateMarker(lat, lng);
        this.tasinmazForm.patchValue({
          enlem: lat,
          boylam: lng
        });
      });

      // Eğer düzenleme modundaysa marker'ı ekle
      if (this.isEditMode && this.tasinmaz) {
        this.updateMarker(this.tasinmaz.enlem, this.tasinmaz.boylam);
      }
    }
  }

  private updateMarker(lat: number, lng: number): void {
    if (this.map) {
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker([lat, lng] as L.LatLngTuple).addTo(this.map);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.tasinmazForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  onSubmit(): void {
    if (this.tasinmazForm.valid) {
      this.isSubmitting = true;
      const formData = this.tasinmazForm.value;
      this.formSubmit.emit(formData);
    } else {
      Object.keys(this.tasinmazForm.controls).forEach(key => {
        const control = this.tasinmazForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }

  resetForm(): void {
    this.tasinmazForm.reset();
    this.isSubmitting = false;
    if (this.marker && this.map) {
      this.map.removeLayer(this.marker);
      this.map.setView(this.defaultLocation, 6);
    }
  }
}
