// src/app/lista-peliculas-component/lista-peliculas-component.component.ts
import { Component, OnInit }         from '@angular/core';
import { CommonModule }              from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TmdbService }               from '../services/tmdb.service';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './lista-peliculas-component.component.html',
  styleUrls: ['./lista-peliculas-component.component.scss']
})
export class ListaPeliculasComponentComponent implements OnInit {
  peliculas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const genero = params.get('genero');
      if (!genero) return;

      this.tmdbService.getTodasLasPeliculas().subscribe({
        next: obj => {
          this.peliculas = obj[genero.toLowerCase()] || [];
        },
        error: err => console.error(err)
      });
    });
  }
}




