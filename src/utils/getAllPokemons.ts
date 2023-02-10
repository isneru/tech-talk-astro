import type { IData } from "./types"

export async function getAllPokemons() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  )
  const data: IData = await response.json()
  return data.results
}
