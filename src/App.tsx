import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { InputNumber } from './components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <InputNumber />
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}
