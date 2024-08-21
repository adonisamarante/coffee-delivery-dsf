import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer, PlusMinusButton } from './styles'

interface InputNumberProps {
  quantity: number
  addQuantity: () => void
  decreaseQuantity: () => void
}

export function InputNumber({
  quantity,
  addQuantity,
  decreaseQuantity,
}: InputNumberProps) {
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
