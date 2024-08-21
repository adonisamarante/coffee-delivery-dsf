import { ShoppingCartSimple } from 'phosphor-react'
import { CartAmountTooltip, CartIcon } from './styles'
import { useContext } from 'react'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'

export function ShopCartIcon() {
  const { coffees } = useContext(CoffeeOrderContext)

  return (
    <CartIcon disabled={!coffees.length}>
      {coffees.length > 0 && (
        <CartAmountTooltip>
          <span>{coffees.length}</span>
        </CartAmountTooltip>
      )}
      <ShoppingCartSimple size={22} weight="fill" className="cart-icon" />
    </CartIcon>
  )
}
