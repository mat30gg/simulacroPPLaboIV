import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent {
  tipoSeleccionado = "terror";

  nombrePelicula = "";
}
