import { ShoppingCartSimple } from 'phosphor-react'
import { CartAmountTooltip, CartIcon } from './styles'

export function ShopCartIcon() {
  return (
    <CartIcon>
      <CartAmountTooltip>19</CartAmountTooltip>
      <ShoppingCartSimple size={22} weight="fill" className="cart-icon" />
    </CartIcon>
  )
}
