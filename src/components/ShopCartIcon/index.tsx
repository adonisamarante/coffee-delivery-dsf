import { ShoppingCartSimple } from 'phosphor-react'
import { CartAmountTooltip, CartIcon } from './styles'

export function ShopCartIcon() {
  return (
    <CartIcon>
      <CartAmountTooltip>
        <span>4</span>
      </CartAmountTooltip>
      <ShoppingCartSimple size={22} weight="fill" className="cart-icon" />
    </CartIcon>
  )
}
