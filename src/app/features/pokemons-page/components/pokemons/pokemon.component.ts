import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {IPokemon, IPokemonInfo} from "../../interfaces/ipokemon";
import {ActivatedRoute} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: IPokemon[];
  png: string;
  pokemonInfo: IPokemonInfo;
  pageEvent: PageEvent;
  pokemonAmount: number;

  constructor(private pokemonService: PokemonService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({pokemon}) => {
      this.pokemon = pokemon.results;
      console.log(this.pokemon)
    })
    this.pokemonAmount = this.pokemonService.pokemonAmount;
  }

  getInfo(url: string): void {
    this.pokemonService.getPokemonInfo(url).subscribe(data => {
      this.pokemonInfo = data;
    })
  }

}
