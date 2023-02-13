import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonComponent} from "./components/pokemons/pokemon.component";
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [PokemonComponent, PokemonInfoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule
  ],
  exports: [PokemonComponent, PokemonInfoComponent]
})
export class PokemonModule { }
