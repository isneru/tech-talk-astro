export type TData = {
  count: number
  next: unknown
  previous: unknown
  results: Pokemon[]
}

type Pokemon = {
  name: string
  url: string
}
