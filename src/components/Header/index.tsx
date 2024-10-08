import logo from '../../assets/logo.png'
import { ShopCartIcon } from '../ShopCartIcon'
import { MapPin } from 'phosphor-react'
import { ButtonsContainer, HeaderContainer, LocationButton } from './styles'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleNavigateHome() {
    navigate('/')
  }

  function handleNavigateCheckout() {
    navigate('/Checkout')
  }

  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery Logo" onClick={handleNavigateHome} />

      <ButtonsContainer>
        <LocationButton>
          <MapPin className="map-pin" weight="fill" />
          <span>Florianopolis, SC</span>
        </LocationButton>
        <ShopCartIcon onClick={handleNavigateCheckout} />
      </ButtonsContainer>
    </HeaderContainer>
  )
}
