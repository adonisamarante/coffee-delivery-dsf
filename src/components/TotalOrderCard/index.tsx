import { CreditCard } from 'phosphor-react'
import { CardSelectButton } from './styles'
import { useState } from 'react'

export function TotalOrderCard() {
  const [isSelected, setIsSelected] = useState(false)

  function handleSelected() {
    setIsSelected((state) => !state)
  }

  return (
    <CardSelectButton isSelected={isSelected} onClick={handleSelected}>
      <CreditCard className="card-icon" />
      CARTÃO DE CRÉDITO
    </CardSelectButton>
  )
}
