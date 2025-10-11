import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 2rem 10rem;
  background-color: ${(props) => props.theme['background-color']}F2;
  box-shadow: 0px 2px 28px ${(props) => props.theme['background-color']};

  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  img {
    &:hover {
      cursor: pointer;
    }
  }
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
