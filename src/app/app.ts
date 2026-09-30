import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Inicio } from './components/inicio/inicio';
import { Productos } from './components/productos/productos';
import { Ofertas } from './components/ofertas/ofertas';
import { ResenaComponent } from './components/resena/resena';
import { Nosotros } from './components/nosotros/nosotros';

import { ResenaService } from './services/resena.service';

@Component({
  imports: [
    RouterOutlet,
    Inicio,
    Productos,
    Ofertas,
    ResenaComponent,
    Nosotros
  ],
  providers: [ResenaService],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tecnomax');
}