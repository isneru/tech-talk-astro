import type { IPokemon } from "./types"

export async function getPokemonByName(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data: IPokemon = await response.json()
  return data
}
