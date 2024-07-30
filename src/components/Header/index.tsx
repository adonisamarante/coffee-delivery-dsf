import logo from '../../assets/logo.png'
import { ShopCartIcon } from '../ShopCartIcon'
import { MapPin } from 'phosphor-react'
import { ButtonsContainer, HeaderContainer, LocationButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery Logo" />

      <ButtonsContainer>
        <LocationButton>
          <MapPin className="map-pin" weight="fill" />
          <span>Florianopolis, SC</span>
        </LocationButton>
        <ShopCartIcon />
      </ButtonsContainer>
    </HeaderContainer>
  )
}
