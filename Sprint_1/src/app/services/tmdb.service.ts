// src/app/services/tmdb.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TmdbService {
  private jsonUrl = '/assets/1_comedia.json';

  constructor(private http: HttpClient) {}

  getTodasLasPeliculas(): Observable<{ [key: string]: any[] }> {
    return this.http.get<{ [key: string]: any[] }>(this.jsonUrl);
  }
}


