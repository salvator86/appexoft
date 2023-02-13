import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PokemonService} from "./pokemons-page/services/pokemon.service";
import {IPokemon} from "./pokemons-page/interfaces/ipokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<{results: IPokemon[]}> {

  constructor(private pokemonService: PokemonService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{results: IPokemon[]}>
    | { results: IPokemon[] } {

    return this.pokemonService.getPokemon();
  }
}
