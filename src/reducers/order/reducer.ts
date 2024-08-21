import { produce } from 'immer'
import { IOrder } from '../../infra/interfaces/order'
import { ActionTypes } from './actions'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function orderReducer(state: IOrder, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_ORDER:
      return produce(state, (draft) => {
        const payloadCoffee = action.payload.coffee

        const existIndex = draft.coffees.findIndex(
          (coffee) => coffee.name === payloadCoffee.name,
        )

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

    default:
      return state
  }
}
