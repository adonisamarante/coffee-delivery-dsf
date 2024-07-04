import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.75rem 0.5rem;
  box-shadow: none;
  border-radius: 8px;
  border: 0;
  line-height: 160%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
