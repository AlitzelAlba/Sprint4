// src/app/generos-pelicula/generos-pelicula.component.ts
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser }                      from '@angular/common';
import { RouterModule, Router }                                 from '@angular/router';
import { PLATFORM_ID }                                          from '@angular/core';

declare let bootstrap: any;

@Component({
  selector: 'app-generos-pelicula',
  standalone: true,                       // marca como standalone
  imports: [ CommonModule, RouterModule ],// importa CommonModule y RouterModule
  templateUrl: './generos-pelicula.component.html',
  styleUrls: ['./generos-pelicula.component.scss']
})
export class GenerosPeliculaComponent implements OnInit {
  @ViewChild('miGenero', { static: true })
  dropdownButton!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && this.dropdownButton) {
      new bootstrap.Dropdown(this.dropdownButton.nativeElement);
    }
  }

  verGenero(genero: string): void {
    // Navega a /listapeliculas/:genero
    this.router.navigate(['/listapeliculas', genero]);
  }
}


