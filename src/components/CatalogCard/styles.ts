import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 19.375rem;
  width: 16rem;
  background-color: ${(props) => props.theme['base-card']};

  position: relative;

  flex-direction: column;
  align-items: center;

  margin-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-radius: 6px 36px 6px 36px;

  img {
    position: absolute;
    top: -1.25rem;

    height: 7.5rem;
    width: 7.5rem;
  }
`

export const TagsWrapper = styled.div`
  margin-top: 7rem;

  justify-content: center;
  gap: 0.25rem;
`

export const CoffeeTag = styled.div`
  width: fit-content;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  span {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
  }
`

export const CoffeeDescritpion = styled.div`
  width: 13rem;
  margin-top: 1rem;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;

  :first-child {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
  }

  :last-child {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const CardFooter = styled.div`
  flex: 1;
  width: 13rem;
  justify-content: space-between;
  align-items: end;

  > div:first-of-type {
    gap: 0.2rem;

    :first-child {
      font-size: 12px;
      padding-top: 0.2rem;
    }

    :last-child {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
    }
  }

  div {
    align-items: center;
    gap: 0.5rem;
  }
`
