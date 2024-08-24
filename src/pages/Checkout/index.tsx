import {
  AddressWrapper,
  Container,
  PaymentWrapper,
  SignUpFormContainer,
  TotalOrderWrapper,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <SignUpFormContainer>
        <AddressWrapper>
          <p>address</p>
        </AddressWrapper>

        <PaymentWrapper>
          <p>payment</p>
        </PaymentWrapper>
      </SignUpFormContainer>

      <TotalOrderWrapper>
        <p>total order</p>
      </TotalOrderWrapper>
    </Container>
  )
}
