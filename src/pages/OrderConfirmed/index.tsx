import { useContext } from 'react'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'
import deliveryScooterImg from '../../assets/delivery-scooter.png'
import { AddressWrapper, Container, TitleWrapper } from './styles'

export function OrderConfirmed() {
  const { orderState } = useContext(CoffeeOrderContext)
  const orderCompleted = orderState
  console.log(orderCompleted)

  return (
    <Container>
      <TitleWrapper>
        <span>Uhu! Pedido confirmado</span>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </TitleWrapper>
      <div>
        <AddressWrapper>address</AddressWrapper>
        <img src={deliveryScooterImg} alt="delivery scooter" />
      </div>
    </Container>
  )
}
