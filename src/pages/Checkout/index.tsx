import { useContext, useEffect, useState } from 'react'
import {
  InputText,
  OrderPayMethodBtn,
  PaymentMethod,
  PaymentMethods,
  PrimaryButton,
  ShopCartCard,
} from '../../components'
import * as S from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { NumericFormat } from 'react-number-format'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IAddress, IOrder } from '../../infra/interfaces/order'

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
  const { coffees, updateOrder } = useContext(CoffeeOrderContext)
  const [selectedPayment, setSelectedPayment] = useState('')
  const [totalItemsPrice, setTotalItemsPrice] = useState(0)
  const [totalOrderPrice, setTotalOrderPrice] = useState(0)
  const navigate = useNavigate()

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

  const isOptionalFilled = !!formValues.complement

  function handleSelectedPayment(paymentMethod: string) {
    setSelectedPayment(paymentMethod)
  }

  function handleCreateNewOrder(data: NewOrderFormData | IAddress) {
    if (!selectedPayment) {
      alert('Selecione a forma de pagamento')
      return
    }

    if (coffees.length <= 0) {
      alert('Este pedido está vazio, adicione cafés ao pedido')
      return
    }

    const newOrder: IOrder = {
      coffees,
      address: data,
      paymentMethod: selectedPayment,
      total: String(totalOrderPrice),
    }

    updateOrder(newOrder)
    navigate('/order-confirmed')
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
    <S.Container>
      <form
        onSubmit={handleSubmit(handleCreateNewOrder, (errors) => {
          console.log('AddressFormErrors', errors)
        })}
        action=""
      >
        <FormProvider {...newOrderForm}>
          <S.SignUpFormContainer>
            <h2>Complete seu pedido</h2>
            <S.AddressWrapper>
              <S.AddressTitle>
                <div>
                  <MapPinLine size={22} />
                  <p>Endereço de Entrega</p>
                </div>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </S.AddressTitle>

              <S.AddressInfo>
                <S.FirstLine>
                  <Controller
                    name="zip"
                    control={control}
                    render={({ field }) => (
                      <InputText id="zip" placeholder="CEP" {...field} />
                    )}
                  />
                </S.FirstLine>
                <S.SecondLine>
                  <Controller
                    name="streetName"
                    control={control}
                    render={({ field }) => (
                      <InputText id="streetName" placeholder="Rua" {...field} />
                    )}
                  />
                </S.SecondLine>
                <S.ThirdLine>
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
                </S.ThirdLine>
                <S.FourthLine>
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
                </S.FourthLine>
              </S.AddressInfo>
            </S.AddressWrapper>

            <S.PaymentWrapper>
              <S.PaymentTitle>
                <div>
                  <CurrencyDollar size={22} />
                  <p>Pagamento</p>
                </div>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </S.PaymentTitle>

              <S.PaymentInfoBtns>
                {Object.keys(PaymentMethods).map((method) => (
                  <OrderPayMethodBtn
                    key={method}
                    method={method as PaymentMethod}
                    onClick={() => handleSelectedPayment(method)}
                    isSelected={selectedPayment === method}
                  />
                ))}
              </S.PaymentInfoBtns>
            </S.PaymentWrapper>
          </S.SignUpFormContainer>
        </FormProvider>

        <S.TotalOrderContainer>
          <h2>Cafés selecionados</h2>
          <S.TotalOrderWrapper>
            <S.CoffeeListWrapper>
              <S.CoffeeList>
                {coffees.length > 0 ? (
                  coffees.map((coffee) => {
                    const coffeeIndex = coffees.indexOf(coffee)

                    if (coffeeIndex !== coffees.length - 1) {
                      return (
                        <>
                          <ShopCartCard key={coffee.id} coffee={coffee} />
                          <S.Separator />
                        </>
                      )
                    } else {
                      return <ShopCartCard key={coffee.id} coffee={coffee} />
                    }
                  })
                ) : (
                  <p>Nenhum Item</p>
                )}
              </S.CoffeeList>

              {coffees.length > 0 && (
                <>
                  <S.GradTop />
                  <S.GradBottom />
                </>
              )}
            </S.CoffeeListWrapper>

            <S.Separator />

            <S.ValuesAmountWrapper>
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
            </S.ValuesAmountWrapper>
            <PrimaryButton type="submit" text="CONFIRMAR PEDIDO" />
          </S.TotalOrderWrapper>
        </S.TotalOrderContainer>
      </form>
    </S.Container>
  )
}
