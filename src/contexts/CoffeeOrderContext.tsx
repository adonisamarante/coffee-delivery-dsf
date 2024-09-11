import { createContext, ReactNode, useReducer } from 'react'
import { orderReducer } from '../reducers/order/reducer'
import { ICoffee } from '../infra/interfaces/coffee'
import {
  addCoffeeToOrderAction,
  updateCoffeeQuantityAction,
  removeCoffeeFromOrderAction,
} from '../reducers/order/actions'

interface ICoffeeOrderContextType {
  coffees: ICoffee[]
  addCoffeeToOrder: (coffee: ICoffee) => void
  updateCoffeeOrderQuantity: (coffee: ICoffee, quantity: number) => void
  removeCoffeeFromOrder: (coffee: ICoffee) => void
}

export const CoffeeOrderContext = createContext({} as ICoffeeOrderContextType)

interface ICoffeeOrderContextProviderProps {
  children: ReactNode
}

export function CoffeeOrderContextProvider({
  children,
}: ICoffeeOrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    {
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
    },
    // (initialState) => {
    //   return initialState
    // },
  )

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

  return (
    <CoffeeOrderContext.Provider
      value={{
        coffees,
        addCoffeeToOrder,
        updateCoffeeOrderQuantity,
        removeCoffeeFromOrder,
      }}
    >
      {children}
    </CoffeeOrderContext.Provider>
  )
}
