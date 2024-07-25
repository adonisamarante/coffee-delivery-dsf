import expressoCremoso from '../../assets/coffeeTypes/expresso-cremoso.png'
import { AddToCartButton } from '../AddToCartButton'
import { InputNumber } from '../InputNumber'
import {
  CardContainer,
  CardFooter,
  CoffeeDescritpion,
  CoffeeTag,
} from './styles'

export function CatalogCard() {
  return (
    <CardContainer>
      <img src={expressoCremoso} alt="Café Americano" />

      <CoffeeTag>
        <span>TRADICIONAL</span>
      </CoffeeTag>

      <CoffeeDescritpion>
        <span>Expresso Cremoso</span>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CoffeeDescritpion>

      <CardFooter>
        <div>
          <span>R$</span>
          <span>9,90</span>
        </div>

        <div>
          <InputNumber />
          <AddToCartButton />
        </div>
      </CardFooter>
    </CardContainer>
  )
}
