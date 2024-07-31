import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeCupImg from '../../assets/home/coffee-cup.png'
import { useTheme } from 'styled-components'

import {
  PerkWrapper,
  TitleContainer,
  TitlePerksWrapper,
  TitleTextContainer,
  TitleTextWrapper,
} from './styles'

export function Home() {
  const theme = useTheme()

  return (
    <TitleContainer>
      <TitleTextContainer>
        <TitleTextWrapper>
          <span>
            Encontre o café perfeito
            <br />
            para qualquer hora do dia
          </span>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />
            qualquer hora
          </span>
        </TitleTextWrapper>

        <TitlePerksWrapper>
          <PerkWrapper color={theme['yellow-dark']}>
            <div>
              <ShoppingCart color="white" weight="fill" size={16} />
            </div>
            <span>Compra simples e segura</span>
          </PerkWrapper>
          <PerkWrapper color={theme['base-text']}>
            <div>
              <Package color="white" weight="fill" size={16} />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </PerkWrapper>
          <PerkWrapper color={theme.yellow}>
            <div>
              <Timer color="white" weight="fill" size={16} />
            </div>
            <span>Entrega rápida e rastreada</span>
          </PerkWrapper>
          <PerkWrapper color={theme.purple}>
            <div>
              <Coffee color="white" weight="fill" size={16} />
            </div>
            <span>O café chega fresquinho até você</span>
          </PerkWrapper>
        </TitlePerksWrapper>
      </TitleTextContainer>
      <img src={CoffeeCupImg} alt="Cup of Coffee Image" />
    </TitleContainer>
  )
}
