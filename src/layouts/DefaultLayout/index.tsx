import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container, Layout, LayoutWrapper } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <LayoutWrapper>
        <Layout>
          <Header />

          <Outlet />
        </Layout>
      </LayoutWrapper>
    </Container>
  )
}
