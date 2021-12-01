import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Jugador}  from "./jugador.model";
import {Partida} from "./partida.model";


@Injectable()
export class Service {
  constructor(private http: Http) {}

  getJugador(): Observable<Jugador[]> {
  return this.http.get('/api/user')
    .map((res: Response) => res.json().response.map((jugador: Jugador) => new Jugador().deserialize(jugador)));
  }
  
  getPartida(): Observable<Partida[]> {
  return this.http.get('/api/user')
    .map((res: Response) => res.json().response.map((partida: Partida) => new Partida().deserialize(partida)));
  }
  
}
