import { AddToCartButton } from '../AddToCartButton'
import { InputNumber } from '../InputNumber'
import { ICoffee } from '../../infra/interfaces/coffee'
import {
  CardContainer,
  CardFooter,
  CoffeeDescritpion,
  CoffeeTag,
  TagsWrapper,
} from './styles'

interface CatalogCardProps {
  coffee: ICoffee
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.name} />

      <TagsWrapper>
        {coffee.tags.map((tag) => {
          return (
            <CoffeeTag key={tag}>
              <span>{tag}</span>
            </CoffeeTag>
          )
        })}
      </TagsWrapper>

      <CoffeeDescritpion>
        <span>{coffee.name}</span>
        <span>{coffee.description}</span>
      </CoffeeDescritpion>

      <CardFooter>
        <div>
          <span>R$</span>
          <span>{coffee.price}</span>
        </div>

        <div>
          <InputNumber />
          <AddToCartButton />
        </div>
      </CardFooter>
    </CardContainer>
  )
}
