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
import { useContext, useState } from 'react'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'

interface CatalogCardProps {
  coffee: ICoffee
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  const [quantity, setQuantity] = useState(0)
  const { addCoffeeToOrder } = useContext(CoffeeOrderContext)

  function addQuantity() {
    setQuantity((state) => state + 1)
  }

  function decreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  function addItemToOrder() {
    const newCoffee = {
      ...coffee,
      quantity,
    }

    if (quantity === 0) {
      return
    }

    addCoffeeToOrder(newCoffee)
    setQuantity(0)
  }

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
          <InputNumber
            quantity={quantity}
            addQuantity={addQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <AddToCartButton onClick={addItemToOrder} />
        </div>
      </CardFooter>
    </CardContainer>
  )
}
