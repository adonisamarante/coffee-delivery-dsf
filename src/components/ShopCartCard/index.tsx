import {
  CardContainer,
  ItemInfo,
  ItemInfoSection,
  ItemInfoSectionButtons,
} from './styles'
import americano from '../../assets/coffeeTypes/americano.png'
import { InputNumber } from '../InputNumber'
import { ButtonRemove } from '../ButtonRemove'

export function ShopCartCard() {
  return (
    <CardContainer>
      <img src={americano} alt="Café Americano" />

      <ItemInfo>
        <ItemInfoSection>
          <span>Americano</span>
          <span>R$ 9,90</span>
        </ItemInfoSection>

        <ItemInfoSectionButtons>
          <InputNumber />
          <ButtonRemove />
        </ItemInfoSectionButtons>
      </ItemInfo>
    </CardContainer>
  )
}
