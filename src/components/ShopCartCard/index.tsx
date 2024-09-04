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

interface IShopCartCardProps {
  coffee: ICoffee
}

export function ShopCartCard({ coffee }: IShopCartCardProps) {
  const totalPrice = coffee.quantity * parseFloat(coffee.price)

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
          <InputNumber quantity={coffee.quantity} />
          <ButtonRemove />
        </ItemInfoSectionButtons>
      </ItemInfo>
    </CardContainer>
  )
}
