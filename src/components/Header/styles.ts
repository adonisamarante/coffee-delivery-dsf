import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 2rem 0;

  justify-content: space-between;
`

export const ButtonsContainer = styled.div`
  gap: 0.75rem;
  justify-content: end;
`

export const LocationButton = styled.div`
  width: fit-content;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0 0.5rem;

  align-items: center;
  gap: 0.25rem;

  span,
  .map-pin {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    cursor: pointer;

    span,
    .map-pin {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
