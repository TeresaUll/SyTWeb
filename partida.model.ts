import {Jugador} from "./jugador.model";
import {Deserializable} from "./deserializable.model";


export class Partida implements Deserializable {
    lugar: string;
    nivel: string;
    horario: string;
    jugador: Jugador;
    
   constructor(lugar:string, nivel: string, horario:string,jugador: Jugador){

    this.lugar = lugar;
    this.nivel = nivel;
    this.horario = horario;
    this.jugador = jugador;
    }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.jugador = new Jugador().deserialize(input.jugador);
    return this;
  }
}
class listaPartidas{
    partidas: Partida[];
    
    constructor(){
        this.partidas=[// news de partidas];
    }
}
