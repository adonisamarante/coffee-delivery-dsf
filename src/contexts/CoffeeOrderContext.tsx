import { createContext, ReactNode } from 'react'
// import coffees from '../mocks/coffees'
// import { IOrder } from '../infra/interfaces/order'
import { ICoffee } from '../infra/interfaces/coffee'

interface ICoffeeOrderContextType {
  order: ICoffee
}

export const CoffeeOrderContext = createContext({} as ICoffeeOrderContextType)

interface ICoffeeOrderContextProviderProps {
  children: ReactNode
}

export function CoffeeOrderContextProvider({
  children,
}: ICoffeeOrderContextProviderProps) {
  // const [orderState, dispatch] = useReducer({
  //   coffees: [],
  //   quantity: 0,
  //   paymentMethod: '',
  //   total: '',
  //   address: '',
  // })

  // const order: IOrder = {}
  // order.coffees.push(coffees)

  const order: ICoffee = {
    description: '',
    id: '',
    image: '',
    name: '',
    price: '',
    tags: ['', ''],
  }

  return (
    <CoffeeOrderContext.Provider value={{ order }}>
      {children}
    </CoffeeOrderContext.Provider>
  )
}
