import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;

  justify-content: center;
`

export const LayoutWrapper = styled.div`
  width: 90rem;
  height: 100vh;
  padding: 0 10rem;

  background: ${(props) => props.theme['background-color']};

  flex-direction: column;
`
