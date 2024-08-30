import {
  CardContainer,
  ItemInfo,
  ItemInfoSection,
  ItemInfoSectionButtons,
} from './styles'
import { InputNumber } from '../InputNumber'
import { ButtonRemove } from '../ButtonRemove'
import { ICoffee } from '../../infra/interfaces/coffee'

interface IShopCartCardProps {
  coffee: ICoffee
}

export function ShopCartCard({ coffee }: IShopCartCardProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt="Café Americano" />

      <ItemInfo>
        <ItemInfoSection>
          <span>{coffee.name}</span>
          <span>R$ {coffee.quantity * parseFloat(coffee.price)}</span>
        </ItemInfoSection>

        <ItemInfoSectionButtons>
          <InputNumber quantity={coffee.quantity} />
          <ButtonRemove />
        </ItemInfoSectionButtons>
      </ItemInfo>
    </CardContainer>
  )
}
