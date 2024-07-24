import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ShopCartCard } from './components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <ShopCartCard />
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}
