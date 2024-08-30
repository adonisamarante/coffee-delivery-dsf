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
  width: 28rem;

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

export const CoffeeListWrapper = styled.div`
  position: relative;
`

export const CoffeeList = styled.div`
  width: 100%;
  max-height: 18.75rem;
  overflow-y: scroll;
  overflow-x: hidden;

  align-items: center;
  flex-direction: column;

  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const GradTop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 15px;
  pointer-events: none; /* Allows clicks to pass through the gradient */
  background: -moz-linear-gradient(
    top,
    ${(props) => props.theme['base-card']} 0%,
    rgba(137, 255, 241, 0) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, ${(props) => props.theme['base-card']}),
    color-stop(100%, rgba(137, 255, 241, 0))
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    ${(props) => props.theme['base-card']} 0%,
    rgba(137, 255, 241, 0) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    ${(props) => props.theme['base-card']} 0%,
    rgba(137, 255, 241, 0) 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    ${(props) => props.theme['base-card']} 0%,
    rgba(137, 255, 241, 0) 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme['base-card']} 0%,
    rgba(137, 255, 241, 0) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0089fff1', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
`

export const GradBottom = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 15px;
  pointer-events: none; /* Allows clicks to pass through the gradient */
  background: -moz-linear-gradient(
    top,
    rgba(137, 255, 241, 0) 0%,
    ${(props) => props.theme['base-card']} 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(137, 255, 241, 0)),
    color-stop(100%, ${(props) => props.theme['base-card']})
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    rgba(137, 255, 241, 0) 0%,
    ${(props) => props.theme['base-card']} 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    rgba(137, 255, 241, 0) 0%,
    ${(props) => props.theme['base-card']} 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    rgba(137, 255, 241, 0) 0%,
    ${(props) => props.theme['base-card']} 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    rgba(137, 255, 241, 0) 0%,
    ${(props) => props.theme['base-card']} 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0089fff1', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
`

export const Separator = styled.div`
  width: 100%;
  padding: 0.03rem 0;
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
