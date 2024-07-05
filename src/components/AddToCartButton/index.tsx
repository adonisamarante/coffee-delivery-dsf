import { ShoppingCartSimple } from 'phosphor-react'
import { CartIcon } from './styles'

export function AddToCartButton() {
  return (
    <CartIcon>
      <ShoppingCartSimple size={22} className="cart-icon" />
    </CartIcon>
  )
}
