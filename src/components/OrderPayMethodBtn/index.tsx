import { CreditCard, Bank, Money } from 'phosphor-react'
import { OrderPayMethodButton } from './styles'
import { ButtonHTMLAttributes } from 'react'

export interface PaymentMethodDetails {
  icon: JSX.Element
  label: string
}

export const PaymentMethods = {
  CreditCard: {
    icon: <CreditCard className="button-icon" />,
    label: 'Cartão de Crédito',
  },
  DebitCard: {
    icon: <Bank className="button-icon" />,
    label: 'Cartão de Débito',
  },
  Cash: {
    icon: <Money className="button-icon" />,
    label: 'Dinheiro',
  },
}

export type PaymentMethod = keyof typeof PaymentMethods

interface IOrderPayMethodBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  method: PaymentMethod
  isSelected?: boolean
}

export function OrderPayMethodBtn({
  method = 'CreditCard',
  isSelected = false,
  ...props
}: IOrderPayMethodBtnProps) {
  const methodDetails: PaymentMethodDetails = PaymentMethods[method]

  return (
    <OrderPayMethodButton {...props} isSelected={isSelected} type="button">
      {methodDetails.icon}
      {methodDetails.label}
    </OrderPayMethodButton>
  )
}
