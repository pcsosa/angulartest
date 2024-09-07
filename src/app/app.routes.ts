import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component'; // Ajusta la ruta según la ubicación del componente

export const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Ruta raíz
  { path: 'principal', component: PrincipalComponent }, // Ruta '/principal'
];
