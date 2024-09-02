import { useContext } from 'react'
import { PrimaryButton, ShopCartCard } from '../../components'
import {
  AddressTitle,
  AddressWrapper,
  CoffeeList,
  CoffeeListWrapper,
  Container,
  GradBottom,
  GradTop,
  PaymentWrapper,
  Separator,
  SignUpFormContainer,
  TotalOrderContainer,
  TotalOrderWrapper,
  ValuesAmountWrapper,
} from './styles'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'
import { MapPinLine } from 'phosphor-react'
export function Checkout() {
  const { coffees } = useContext(CoffeeOrderContext)

  return (
    <Container>
      <SignUpFormContainer>
        <h2>Complete seu pedido</h2>
        <AddressWrapper>
          <AddressTitle>
            <div>
              <MapPinLine size={22} />
              <p>Endereço de Entrega</p>
            </div>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </AddressTitle>
          <div>
            <p>Address</p>
          </div>
        </AddressWrapper>

        <PaymentWrapper>
          <p>payment</p>
        </PaymentWrapper>
      </SignUpFormContainer>

      <TotalOrderContainer>
        <h2>Cafés selecionados</h2>
        <TotalOrderWrapper>
          <CoffeeListWrapper>
            <CoffeeList>
              {coffees.length > 0 ? (
                coffees.map((coffee) => {
                  const coffeeIndex = coffees.indexOf(coffee)

                  if (coffeeIndex !== coffees.length - 1) {
                    return (
                      <>
                        <ShopCartCard key={coffee.id} coffee={coffee} />
                        <Separator />
                      </>
                    )
                  } else {
                    return <ShopCartCard key={coffee.id} coffee={coffee} />
                  }
                })
              ) : (
                <p>nenhum item</p>
              )}
            </CoffeeList>

            {coffees.length > 0 && (
              <>
                <GradTop />
                <GradBottom />
              </>
            )}
          </CoffeeListWrapper>

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
