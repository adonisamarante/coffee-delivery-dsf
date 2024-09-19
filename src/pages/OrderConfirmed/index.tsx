import { useContext } from 'react'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'

export function OrderConfirmed() {
  const { orderState } = useContext(CoffeeOrderContext)

  return (
    <>
      <span>Order Confirmed</span>
      <pre>{JSON.stringify(orderState, null, 1)}</pre>
    </>
  )
}
