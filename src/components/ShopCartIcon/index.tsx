import { ShoppingCartSimple } from 'phosphor-react'
import { CartAmountTooltip, CartIcon } from './styles'
import { ButtonHTMLAttributes, useContext } from 'react'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'

interface IShopCartIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ShopCartIcon(props: IShopCartIconProps) {
  const { coffees } = useContext(CoffeeOrderContext)

  return (
    <CartIcon {...props} disabled={!coffees.length}>
      {coffees.length > 0 && (
        <CartAmountTooltip>
          <span>{coffees.length}</span>
        </CartAmountTooltip>
      )}
      <ShoppingCartSimple size={22} weight="fill" className="cart-icon" />
    </CartIcon>
  )
}
