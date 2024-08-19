import { produce } from 'immer'
import { IOrder } from '../../infra/interfaces/order'
import { ActionTypes } from './actions'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function orderReducer(state: IOrder, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_ORDER:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.coffee)
      })
    case ActionTypes.REMOVE_COFFEE_FROM_ORDER:
      return state
    default:
      return state
  }
}
