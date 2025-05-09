import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasinmazListComponent } from './components/tasinmaz-list/tasinmaz-list.component';
import { HaritaComponent } from './components/harita/harita.component';
import { AyarlarComponent } from './components/ayarlar/ayarlar.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasinmazlar', pathMatch: 'full' },
  { path: 'tasinmazlar', component: TasinmazListComponent },
  { path: 'harita', component: HaritaComponent },
  { path: 'ayarlar', component: AyarlarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 