import styled from 'styled-components'

interface OrderPayMethodBtnProps {
  isSelected: boolean
}

export const OrderPayMethodButton = styled.button<OrderPayMethodBtnProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  flex: 1;

  padding: ${(props) => (props.isSelected ? 'calc(1rem - 2px)' : '1rem')};
  border: ${(props) =>
    props.isSelected ? `solid 2px ${props.theme.purple}` : 'none'};
  border-radius: 6px;

  background-color: ${(props) =>
    props.isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']};

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  .button-icon {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
