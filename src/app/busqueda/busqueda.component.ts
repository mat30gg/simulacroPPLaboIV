import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  public peliculaSeleccionada = "{}";

  seleccionDePelicula( peli: string ){
    this.peliculaSeleccionada = peli ;
  }
}
