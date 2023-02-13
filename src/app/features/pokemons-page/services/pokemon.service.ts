import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPokemon, IPokemonInfo} from "../interfaces/ipokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonAmount: number = 1000;

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<{results: IPokemon[]}> {
    return this.http.get<{results: IPokemon[]}>('https://pokeapi.co/api/v2/pokemon/?&limit=' + this.pokemonAmount);
  }

  getPokemonInfo(pokemonInfoLink: string): Observable<IPokemonInfo> {
    return this.http.get<IPokemonInfo>(`${pokemonInfoLink}`);
  }

}
