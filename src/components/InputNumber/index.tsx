import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer, PlusMinusButton } from './styles'
import { useState } from 'react'

export function InputNumber() {
  const [quantity, setQuantity] = useState(0)

  function addQuantity() {
    setQuantity((state) => state + 1)
  }

  function decreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  return (
    <InputNumberContainer>
      <PlusMinusButton disabled={quantity <= 0} onClick={decreaseQuantity}>
        <Minus className="plus-minus-button" />
      </PlusMinusButton>

      <span>{quantity}</span>

      <PlusMinusButton disabled={quantity >= 99} onClick={addQuantity}>
        <Plus className="plus-minus-button" />
      </PlusMinusButton>
    </InputNumberContainer>
  )
}
