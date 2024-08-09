import { ICoffee } from './coffee'

export interface IAddress {
  zip: string
  streetName: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  stateUf: string
}

export interface IOrder {
  coffees: ICoffee[]
  quantity: number
  paymentMethod: string
  total: string
  address: IAddress
}
