import { ICoffee } from '../../infra/interfaces/coffee'
import { IOrder } from '../../infra/interfaces/order'

export enum ActionTypes {
  ADD_COFFEE_TO_ORDER = 'ADD_COFFEE_TO_ORDER',
  REMOVE_COFFEE_FROM_ORDER = 'REMOVE_COFFEE_FROM_ORDER',
  UPDATE_COFFEE_ORDER_QUANTITY = 'UPDATE_COFFEE_ORDER_QUANTITY',
  UPDATE_ORDER = 'UPDATE_ORDER',
}

export function addCoffeeToOrderAction(coffee: ICoffee) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_ORDER,
    payload: { coffee },
  }
}

export function removeCoffeeFromOrderAction(coffee: ICoffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_ORDER,
    payload: { coffee },
  }
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

export function updateOrderAction(infoToUpdate: IOrder) {
  return {
    type: ActionTypes.UPDATE_ORDER,
    payload: { infoToUpdate },
  }
}
