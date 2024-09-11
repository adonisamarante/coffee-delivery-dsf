import { NumericFormat } from 'react-number-format'
import { ICoffee } from '../../infra/interfaces/coffee'
import { ButtonRemove } from '../ButtonRemove'
import { InputNumber } from '../InputNumber'
import {
  CardContainer,
  ItemInfo,
  ItemInfoSection,
  ItemInfoSectionButtons,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'

interface IShopCartCardProps {
  coffee: ICoffee
}

export function ShopCartCard({ coffee }: IShopCartCardProps) {
  const { updateCoffeeOrderQuantity, removeCoffeeFromOrder } =
    useContext(CoffeeOrderContext)
  const [quantity, setQuantity] = useState(coffee.quantity)
  const totalPrice = quantity * parseFloat(coffee.price)

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity >= 2) {
      setQuantity((state) => state - 1)
    }
  }

  function handleRemoveCoffeeFromOrder() {
    removeCoffeeFromOrder(coffee)
  }

  useEffect(() => {
    updateCoffeeOrderQuantity(coffee, quantity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity])

  return (
    <CardContainer>
      <img src={coffee.image} alt="Café Americano" />

      <ItemInfo>
        <ItemInfoSection>
          <span>{coffee.name}</span>
          <span>
            <NumericFormat
              value={totalPrice.toFixed(2)}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              prefix={'R$ '}
            />
          </span>
        </ItemInfoSection>

        <ItemInfoSectionButtons>
          <InputNumber
            quantity={quantity}
            addQuantity={handleAddQuantity}
            decreaseQuantity={handleDecreaseQuantity}
          />
          <ButtonRemove onClick={handleRemoveCoffeeFromOrder} />
        </ItemInfoSectionButtons>
      </ItemInfo>
    </CardContainer>
  )
}
