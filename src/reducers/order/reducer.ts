import { produce } from 'immer'
import { IOrder } from '../../infra/interfaces/order'
import { ActionTypes } from './actions'
import { ICoffee } from '../../infra/interfaces/coffee'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function orderReducer(state: IOrder, action: any) {
  function verifyExistIndex(coffeeList: ICoffee[], payloadCoffee: ICoffee) {
    return coffeeList.findIndex((coffee) => coffee.name === payloadCoffee.name)
  }

  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_ORDER:
      return produce(state, (draft) => {
        const payloadCoffee = action.payload.coffee

        const existIndex = verifyExistIndex(draft.coffees, payloadCoffee)

        if (existIndex >= 0) {
          draft.coffees.splice(existIndex, 1, {
            ...payloadCoffee,
            quantity:
              draft.coffees[existIndex].quantity + payloadCoffee.quantity,
          })
        } else {
          draft.coffees.push(payloadCoffee)
        }
      })

    case ActionTypes.REMOVE_COFFEE_FROM_ORDER:
      return state

    case ActionTypes.UPDATE_COFFEE_ORDER_QUANTITY:
      return produce(state, (draft) => {
        const payloadCoffee = action.payload.coffee
        const quantity = action.payload.quantity

        const existIndex = verifyExistIndex(draft.coffees, payloadCoffee)

        if (existIndex >= 0) {
          draft.coffees.splice(existIndex, 1, {
            ...payloadCoffee,
            quantity,
          })
        }
      })

    default:
      return state
  }
}
