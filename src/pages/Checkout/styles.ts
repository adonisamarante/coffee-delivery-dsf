import { styled } from 'styled-components'

const BaseWrapper = styled.div`
  background-color: ${(props) => props.theme['base-card']};
`

export const Container = styled.div`
  gap: 2rem;
  padding: 2.5rem 0;
`

export const SignUpFormContainer = styled.div`
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
`

export const AddressWrapper = styled(BaseWrapper)`
  width: 100%;
`

export const PaymentWrapper = styled(BaseWrapper)`
  width: 100%;
`

export const TotalOrderWrapper = styled(BaseWrapper)`
  width: 28rem;
  height: fit-content;
`
