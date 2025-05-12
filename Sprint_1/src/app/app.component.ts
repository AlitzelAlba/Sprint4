// src/app/app.component.ts
import { Component }   from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,             // marca como standalone
  imports: [ RouterOutlet ],     // solo importe RouterOutlet
  template: `<router-outlet></router-outlet>`,  // punto de montaje de las rutas
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sprint_1';
}

