import { Component, Input } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent {
  @Input() peliculaSeleccionada = "{'id':0,'nombre':'','fechaEstreno':'','cantPublico':0,'foto':''}";

  getObject(){
    return JSON.parse(this.peliculaSeleccionada);
  }

}