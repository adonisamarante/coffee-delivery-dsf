import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container, LayoutWrapper } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <LayoutWrapper>
        <Header />

        <Outlet />
      </LayoutWrapper>
    </Container>
  )
}
