import { useContext } from 'react'
import { PrimaryButton, ShopCartCard } from '../../components'
import {
  AddressWrapper,
  Container,
  PaymentWrapper,
  Separator,
  SignUpFormContainer,
  TotalOrderContainer,
  TotalOrderWrapper,
  ValuesAmountWrapper,
} from './styles'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'
export function Checkout() {
  const { coffees } = useContext(CoffeeOrderContext)

  return (
    <Container>
      <SignUpFormContainer>
        <h3>Complete seu pedido</h3>
        <AddressWrapper>
          <p>address</p>
        </AddressWrapper>

        <PaymentWrapper>
          <p>payment</p>
        </PaymentWrapper>
      </SignUpFormContainer>

      <TotalOrderContainer>
        <h3>Cafés selecionados</h3>
        <TotalOrderWrapper>
          {coffees &&
            coffees.map((coffee) => {
              const coffeeIndex = coffees.indexOf(coffee)

              if (coffeeIndex !== coffees.length - 1) {
                return (
                  <>
                    <ShopCartCard key={coffee.id} />
                    <Separator />
                  </>
                )
              } else {
                return <ShopCartCard key={coffee.id} />
              }
            })}

          <Separator />

          <ValuesAmountWrapper>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,00</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="total-text">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </ValuesAmountWrapper>
          <PrimaryButton text="CONFIRMAR PEDIDO" />
        </TotalOrderWrapper>
      </TotalOrderContainer>
    </Container>
  )
}
