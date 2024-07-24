import { CreditCard } from 'phosphor-react'
import { OrderPayMethodButton } from './styles'
import { useState } from 'react'

export function OrderPayMethodBtn() {
  const [isSelected, setIsSelected] = useState(false)

  function handleSelected() {
    setIsSelected((state) => !state)
  }

  return (
    <OrderPayMethodButton isSelected={isSelected} onClick={handleSelected}>
      <CreditCard className="card-icon" />
      CARTÃO DE CRÉDITO
    </OrderPayMethodButton>
  )
}
