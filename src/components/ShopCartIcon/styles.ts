import styled from 'styled-components'

export const CartIcon = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
  position: relative;

  .cart-icon {
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: -4px; // icon size set to 22, but height was 26, 4 more at bottom
  }

  &:hover {
    cursor: pointer;
  }
`

export const CartAmountTooltip = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;

  position: absolute;
  top: -0.625rem;
  right: -0.625rem;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
