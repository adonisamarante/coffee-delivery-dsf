import { ICoffee } from '../../infra/interfaces/coffee'

export enum ActionTypes {
  ADD_COFFEE_TO_ORDER = 'ADD_COFFEE_TO_ORDER',
  REMOVE_COFFEE_FROM_ORDER = 'REMOVE_COFFEE_FROM_ORDER',
}

export function addCoffeeToOrderAction(coffee: ICoffee) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_ORDER,
    payload: { coffee },
  }
}
