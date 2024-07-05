import styled from 'styled-components'

export const CartIcon = styled.button`
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  border: none;
  padding: 0.5rem;

  .cart-icon {
    color: ${(props) => props.theme['base-card']};
    margin-bottom: -4px; // icon size set to 22, but height was 26, 4 more at bottom
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.purple};
  }
`
