import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonComponent} from "./features/pokemons-page/components/pokemons/pokemon.component";
import {PokemonResolver} from "./features/pokemon.resolver";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: PokemonComponent, resolve: {pokemon: PokemonResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
