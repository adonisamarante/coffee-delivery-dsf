import { ShoppingCartSimple } from 'phosphor-react'
import { CartAmountTooltip, CartIcon } from './styles'

export function ShopCartIcon() {
  return (
    <CartIcon>
      <CartAmountTooltip>9</CartAmountTooltip>
      <ShoppingCartSimple size={22} className="cart-icon" />
    </CartIcon>
  )
}
