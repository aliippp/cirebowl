export type Food = {
  id: string
  name: string
  description: string
  options: { [name: string]: number }[]
  price: number
}
