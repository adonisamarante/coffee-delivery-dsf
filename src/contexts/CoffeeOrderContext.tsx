import { createContext, ReactNode, useReducer } from 'react'
import { orderReducer } from '../reducers/order/reducer'
import { ICoffee } from '../infra/interfaces/coffee'
import {
  addCoffeeToOrderAction,
  updateCoffeeQuantityAction,
  removeCoffeeFromOrderAction,
  updateOrderAction,
} from '../reducers/order/actions'
import { IOrder } from '../infra/interfaces/order'

interface ICoffeeOrderContextType {
  coffees: ICoffee[]
  orderState: IOrder
  addCoffeeToOrder: (coffee: ICoffee) => void
  updateCoffeeOrderQuantity: (coffee: ICoffee, quantity: number) => void
  removeCoffeeFromOrder: (coffee: ICoffee) => void
  updateOrder: (order: IOrder) => void
}

export const CoffeeOrderContext = createContext({} as ICoffeeOrderContextType)

interface ICoffeeOrderContextProviderProps {
  children: ReactNode
}

export function CoffeeOrderContextProvider({
  children,
}: ICoffeeOrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, {
    coffees: [],
    paymentMethod: '',
    total: '',
    address: {
      zip: '',
      streetName: '',
      number: 0,
      neighborhood: '',
      city: '',
      stateUf: '',
    },
  })

  const { coffees } = orderState

  function addCoffeeToOrder(coffee: ICoffee) {
    dispatch(addCoffeeToOrderAction(coffee))
  }

  function updateCoffeeOrderQuantity(coffee: ICoffee, quantity: number) {
    dispatch(updateCoffeeQuantityAction(coffee, quantity))
  }

  function removeCoffeeFromOrder(coffee: ICoffee) {
    dispatch(removeCoffeeFromOrderAction(coffee))
  }

  function updateOrder(order: IOrder) {
    dispatch(updateOrderAction(order))
  }

  return (
    <CoffeeOrderContext.Provider
      value={{
        coffees,
        orderState,
        addCoffeeToOrder,
        updateCoffeeOrderQuantity,
        removeCoffeeFromOrder,
        updateOrder,
      }}
    >
      {children}
    </CoffeeOrderContext.Provider>
  )
}
