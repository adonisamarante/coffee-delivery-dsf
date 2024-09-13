import { useContext, useEffect, useState } from 'react'
import {
  InputText,
  OrderPayMethodBtn,
  PaymentMethod,
  PaymentMethods,
  PrimaryButton,
  ShopCartCard,
} from '../../components'
import {
  AddressInfo,
  AddressTitle,
  AddressWrapper,
  CoffeeList,
  CoffeeListWrapper,
  Container,
  FirstLine,
  FourthLine,
  GradBottom,
  GradTop,
  PaymentInfoBtns,
  PaymentTitle,
  PaymentWrapper,
  SecondLine,
  Separator,
  SignUpFormContainer,
  ThirdLine,
  TotalOrderContainer,
  TotalOrderWrapper,
  ValuesAmountWrapper,
} from './styles'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { NumericFormat } from 'react-number-format'

export function Checkout() {
  const { coffees } = useContext(CoffeeOrderContext)

  const [selectedPayment, setSelectedPayment] = useState('')
  const [totalItemsPrice, setTotalItemsPrice] = useState(0)
  const [totalOrderPrice, setTotalOrderPrice] = useState(0)

  const taxaEntrega = 3.5

  function handleSelectedPayment(paymentMethod: string) {
    setSelectedPayment(paymentMethod)
  }

  useEffect(() => {
    if (coffees.length) {
      const calculatedTotalItemsPrice = 0

      const totalItemsPriceSum = coffees.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.quantity * parseFloat(currentValue.price),
        calculatedTotalItemsPrice,
      )

      setTotalItemsPrice(totalItemsPriceSum)
      setTotalOrderPrice(totalItemsPriceSum + taxaEntrega)
    } else {
      setTotalItemsPrice(0)
      setTotalOrderPrice(0)
    }
  }, [coffees])

  return (
    <Container>
      <form>
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

            <AddressInfo>
              <FirstLine>
                <InputText placeholder="CEP" />
              </FirstLine>
              <SecondLine>
                <InputText placeholder="Rua" />
              </SecondLine>
              <ThirdLine>
                <InputText placeholder="Número" />
                <InputText placeholder="Complemento" isOptional />
              </ThirdLine>
              <FourthLine>
                <InputText placeholder="Bairro" />
                <InputText placeholder="Cidade" />
                <InputText placeholder="UF" />
              </FourthLine>
            </AddressInfo>
          </AddressWrapper>

          <PaymentWrapper>
            <PaymentTitle>
              <div>
                <CurrencyDollar size={22} />
                <p>Pagamento</p>
              </div>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </PaymentTitle>

            <PaymentInfoBtns>
              {Object.keys(PaymentMethods).map((method) => (
                <OrderPayMethodBtn
                  key={method}
                  method={method as PaymentMethod}
                  onClick={() => handleSelectedPayment(method)}
                  isSelected={selectedPayment === method}
                />
              ))}
            </PaymentInfoBtns>
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
                  <p>Nenhum Item</p>
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
                <p>
                  <NumericFormat
                    value={totalItemsPrice.toFixed(2)}
                    displayType={'text'}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix={'R$ '}
                  />
                </p>
              </div>
              <div>
                <p>Entrega</p>
                <p>
                  <NumericFormat
                    value={taxaEntrega.toFixed(2)}
                    displayType={'text'}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix={'R$ '}
                  />
                </p>
              </div>
              <div className="total-text">
                <p>Total</p>
                <p>
                  <NumericFormat
                    value={totalOrderPrice.toFixed(2)}
                    displayType={'text'}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix={'R$ '}
                  />
                </p>
              </div>
            </ValuesAmountWrapper>
            <PrimaryButton text="CONFIRMAR PEDIDO" />
          </TotalOrderWrapper>
        </TotalOrderContainer>
      </form>
    </Container>
  )
}
