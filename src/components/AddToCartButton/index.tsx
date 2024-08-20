import { ShoppingCartSimple } from 'phosphor-react'
import { CartIcon } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface AddToCartButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function AddToCartButton(props: AddToCartButtonProps) {
  return (
    <CartIcon {...props}>
      <ShoppingCartSimple size={22} weight="fill" className="cart-icon" />
    </CartIcon>
  )
}
