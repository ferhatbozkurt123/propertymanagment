import { Routes } from '@angular/router';
import { TasinmazListComponent } from './components/tasinmaz-list/tasinmaz-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasinmazlar', pathMatch: 'full' },
  { path: 'tasinmazlar', component: TasinmazListComponent },
  { path: 'harita', component: TasinmazListComponent }, // Şimdilik aynı komponenti kullanıyoruz
  { path: '**', redirectTo: '/tasinmazlar' } // Bilinmeyen rotaları ana sayfaya yönlendir
];
