export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonInfo {
  name: string,
  abilities: IPokemonAbilities[],
  sprites: IPokemonImage,
  types: IPokemonType[]
}

export interface IPokemonAbilities {
  ability: { name: string }
}

export interface IPokemonImage {
  front_default: string
}

export interface IPokemonType {
  type: { name: string }
}
