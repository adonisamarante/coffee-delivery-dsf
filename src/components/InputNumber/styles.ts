import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 2rem;
  width: 4.5rem;
  padding: 0.562rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
`

export const PlusMinusButton = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: 0;

  .plus-minus-button {
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
      cursor: pointer;
    }
  }
`
