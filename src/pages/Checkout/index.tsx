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
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { NumericFormat } from 'react-number-format'
import { useForm, FormProvider, Controller } from 'react-hook-form'

const newOrderFormValidationSchema = zod.object({
  zip: zod.string(),
  streetName: zod.string(),
  number: zod.number(),
  complement: zod.string().optional(),
  neighborhood: zod.string(),
  city: zod.string(),
  stateUf: zod.string(),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { coffees } = useContext(CoffeeOrderContext)

  const [selectedPayment, setSelectedPayment] = useState('')
  const [totalItemsPrice, setTotalItemsPrice] = useState(0)
  const [totalOrderPrice, setTotalOrderPrice] = useState(0)

  const taxaEntrega = 3.5

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zip: '',
      streetName: '',
      number: undefined,
      complement: '',
      neighborhood: '',
      city: '',
      stateUf: '',
    },
  })

  const { control, handleSubmit, reset, watch } = newOrderForm

  const formValues = watch()
  console.log(formValues)

  const isOptionalFilled = !!formValues.complement

  function handleSelectedPayment(paymentMethod: string) {
    setSelectedPayment(paymentMethod)
  }

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log('order created', data)
    reset()
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
      <form
        onSubmit={handleSubmit(handleCreateNewOrder, (errors) => {
          console.log('AddressFormErrors', errors)
        })}
        action=""
      >
        <FormProvider {...newOrderForm}>
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
                  <Controller
                    name="zip"
                    control={control}
                    render={({ field }) => (
                      <InputText id="zip" placeholder="CEP" {...field} />
                    )}
                  />
                </FirstLine>
                <SecondLine>
                  <Controller
                    name="streetName"
                    control={control}
                    render={({ field }) => (
                      <InputText id="streetName" placeholder="Rua" {...field} />
                    )}
                  />
                </SecondLine>
                <ThirdLine>
                  <Controller
                    name="number"
                    control={control}
                    render={({ field }) => (
                      <InputText
                        {...field}
                        id="number"
                        type="number"
                        placeholder="Número"
                        onChange={(e) =>
                          field.onChange(
                            e.target.value ? Number(e.target.value) : '',
                          )
                        }
                      />
                    )}
                  />
                  <Controller
                    name="complement"
                    control={control}
                    render={({ field }) => (
                      <InputText
                        id="complement"
                        placeholder="Complemento"
                        isOptional
                        isOptionalFilled={isOptionalFilled}
                        {...field}
                      />
                    )}
                  />
                </ThirdLine>
                <FourthLine>
                  <Controller
                    name="neighborhood"
                    control={control}
                    render={({ field }) => (
                      <InputText
                        id="neighborhood"
                        placeholder="Bairro"
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <InputText id="city" placeholder="Cidade" {...field} />
                    )}
                  />
                  <Controller
                    name="stateUf"
                    control={control}
                    render={({ field }) => (
                      <InputText id="stateUf" placeholder="UF" {...field} />
                    )}
                  />
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
        </FormProvider>

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
            <PrimaryButton type="submit" text="CONFIRMAR PEDIDO" />
          </TotalOrderWrapper>
        </TotalOrderContainer>
      </form>
    </Container>
  )
}
