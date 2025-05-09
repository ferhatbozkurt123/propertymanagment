import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'tasinmazlar', 
    pathMatch: 'full' 
  },
  {
    path: 'tasinmazlar',
    loadComponent: () => import('./components/tasinmaz-list/tasinmaz-list.component')
      .then(m => m.TasinmazListComponent)
  },
  {
    path: 'ayarlar',
    loadComponent: () => import('./components/ayarlar/ayarlar.component')
      .then(m => m.AyarlarComponent)
  }
]; 