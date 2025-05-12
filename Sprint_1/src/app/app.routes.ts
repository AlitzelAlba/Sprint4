// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { GenerosPeliculaComponent } from './generos-pelicula/generos-pelicula.component';

export const routes: Routes = [
  { path: '', component: GenerosPeliculaComponent },
  {
    path: 'listapeliculas/:genero',
    loadComponent: () =>
      import('./lista-peliculas-component/lista-peliculas-component.component')
        .then(m => m.ListaPeliculasComponentComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


