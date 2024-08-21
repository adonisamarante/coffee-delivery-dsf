import { createContext, ReactNode, useReducer } from 'react'
import { orderReducer } from '../reducers/order/reducer'
import { ICoffee } from '../infra/interfaces/coffee'
import { addCoffeeToOrderAction } from '../reducers/order/actions'

interface ICoffeeOrderContextType {
  coffees: ICoffee[]
  addCoffeeToOrder: (coffee: ICoffee) => void
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
    (initialState) => {
      return initialState
    },
  )

  const { coffees } = orderState

  function addCoffeeToOrder(coffee: ICoffee) {
    dispatch(addCoffeeToOrderAction(coffee))
  }

  return (
    <CoffeeOrderContext.Provider value={{ coffees, addCoffeeToOrder }}>
      {children}
    </CoffeeOrderContext.Provider>
  )
}
