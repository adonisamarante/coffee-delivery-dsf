import { createContext, ReactNode } from 'react'
import { ICoffee } from '../infra/interfaces/coffee'

interface ICoffeeOrderContextType {
  order: ICoffee[]
}

export const CoffeeOrderContext = createContext({} as ICoffeeOrderContextType)

interface ICoffeeOrderContextProviderProps {
  children: ReactNode
}

export function CoffeeOrderContextProvider({
  children,
}: ICoffeeOrderContextProviderProps) {
  const order: ICoffee[] = [
    {
      id: '20',
      description: 'test',
      image: 'test',
      name: 'coffee test',
      price: '10,00',
      tags: ['test1', 'test2'],
    },
  ]

  return (
    <CoffeeOrderContext.Provider value={{ order }}>
      {children}
    </CoffeeOrderContext.Provider>
  )
}
