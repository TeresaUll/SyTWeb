import {Partida} from "./partida.model";
import {Deserializable} from "./deserializable.model";

export class Jugador implements Deserializable {
    nombre: string;
    apellido: string;
    nivel: string;
    partida: Partida;
    
    constructor(nombre:string, apellido: string, nivel:string, partida:Partida){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nivel = nivel;
        this.partida = Partida;
     }

   deserialize(input: any) {
    Object.assign(this, input);
    return this;
   }  
    
}

class listaJugadores{
    jugadores: Jugador[];
    
    constructor(){
        this.jugadores=[ // news de jugadores ]; 
    }
}



