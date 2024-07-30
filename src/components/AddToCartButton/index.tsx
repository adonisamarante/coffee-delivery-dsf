import { ShoppingCartSimple } from 'phosphor-react'
import { CartIcon } from './styles'

export function AddToCartButton() {
  return (
    <CartIcon>
      <ShoppingCartSimple size={22} weight="fill" className="cart-icon" />
    </CartIcon>
  )
}
