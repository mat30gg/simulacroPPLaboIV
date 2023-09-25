export class Pelicula {

    public id: number;
    public nombre: string;
    public tipo: string;
    public fechaEstreno: Date;
    public cantPublico: number;
    public foto: string;

    constructor( id: number, nombre: string, tipo: string, fechaEstreno: Date, cantPublico: number, foto: string ){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantPublico = cantPublico;
        this.foto = foto;
    }


}