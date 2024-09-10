import { ICoffee } from '../../infra/interfaces/coffee'

export enum ActionTypes {
  ADD_COFFEE_TO_ORDER = 'ADD_COFFEE_TO_ORDER',
  REMOVE_COFFEE_FROM_ORDER = 'REMOVE_COFFEE_FROM_ORDER',
  UPDATE_COFFEE_ORDER_QUANTITY = 'UPDATE_COFFEE_ORDER_QUANTITY',
}

export function addCoffeeToOrderAction(coffee: ICoffee) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_ORDER,
    payload: { coffee },
  }
}

export function removeCoffeeFromOrderAction(coffeeId: string) {
  console.log(coffeeId)
}

export function updateCoffeeQuantityAction(coffee: ICoffee, quantity: number) {
  return {
    type: ActionTypes.UPDATE_COFFEE_ORDER_QUANTITY,
    payload: {
      coffee,
      quantity,
    },
  }
}
