import { useContext } from 'react'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'
import deliveryScooterImg from '../../assets/delivery-scooter.png'
import {
  ConfirmationInfoWrapper,
  Container,
  IconWrapper,
  InfoSection,
  InfoWrapper,
  TitleWrapper,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  PaymentMethod,
  PaymentMethodDetails,
  PaymentMethods,
} from '../../components'

export function OrderConfirmed() {
  const { orderState } = useContext(CoffeeOrderContext)

  const payMethod: PaymentMethodDetails =
    PaymentMethods[orderState.paymentMethod as PaymentMethod]

  return (
    <Container>
      <TitleWrapper>
        <span>Uhu! Pedido confirmado</span>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </TitleWrapper>
      <div>
        <ConfirmationInfoWrapper>
          <InfoSection>
            <IconWrapper bgColor="purple">
              <MapPin weight="fill" color="white" size={16} />
            </IconWrapper>
            <InfoWrapper>
              <span>
                Entrega em{' '}
                <span className="bold-span">
                  {orderState.address.streetName}, {orderState.address.number}
                </span>
              </span>
              <span>
                {orderState.address.neighborhood} - {orderState.address.city},{' '}
                {orderState.address.stateUf}
              </span>
            </InfoWrapper>
          </InfoSection>
          <InfoSection>
            <IconWrapper bgColor="yellow">
              <Timer weight="fill" color="white" size={16} />
            </IconWrapper>
            <InfoWrapper>
              <span>Previsão de entrega</span>
              <span className="bold-span">20 min - 30 min</span>
            </InfoWrapper>
          </InfoSection>
          <InfoSection>
            <IconWrapper bgColor="yellow-dark">
              <CurrencyDollar weight="fill" color="white" size={16} />
            </IconWrapper>
            <InfoWrapper>
              <span>Pagamento na entrega</span>
              <span className="bold-span">{payMethod.label}</span>
            </InfoWrapper>
          </InfoSection>
        </ConfirmationInfoWrapper>
        <img src={deliveryScooterImg} alt="delivery scooter" />
      </div>
    </Container>
  )
}
