import { Component, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../clases/pelicula';


@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent{
  public listaPeliculas : Array<Pelicula>;
  public exhibicionListado = true;

  @Output() peliculaSeleccionadaEvent = new EventEmitter<string>();

  constructor(){
    this.listaPeliculas = this.leerListado();
  }

  leerListado() {
    return JSON.parse( localStorage.getItem( "listadopeliculas" ) ?? "[]" );
  }

  ngOnInit(){
    this.leerListado();
  }

  cambiarVista(){
    this.exhibicionListado = !this.exhibicionListado;
  }

  seleccionarPelicula( pelicula : Pelicula){
    this.peliculaSeleccionadaEvent.emit( JSON.stringify( pelicula ) );
  }
}

