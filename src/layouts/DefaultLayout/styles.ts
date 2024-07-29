import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: 100vh;
  padding: 0 10rem;

  background: ${(props) => props.theme['background-color']};

  display: flex;
  flex-direction: column;
`
