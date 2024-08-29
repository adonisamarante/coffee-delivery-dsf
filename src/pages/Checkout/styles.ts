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

export const TotalOrderContainer = styled.div`
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
`

export const TotalOrderWrapper = styled(BaseWrapper)`
  width: 28rem;
  height: fit-content;
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  flex-direction: column;
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const ValuesAmountWrapper = styled.div`
  flex-direction: column;
  gap: 0.75rem;

  margin-bottom: 1.5rem;

  > div {
    justify-content: space-between;
  }

  .total-text {
    margin-bottom: 10px;
  }
`
