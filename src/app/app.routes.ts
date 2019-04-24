import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResposableComponent } from './components/resposable/resposable.component';
import { ActividadComponent } from './components/actividad/actividad.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'responsable', component: ResposableComponent },
  { path: 'actividad', component: ActividadComponent },
//   { path: 'artist/:id', component: ArtistaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = (APP_ROUTES);
