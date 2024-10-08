import { styled } from 'styled-components'

interface PerkIconProps {
  color?: string
}

export const Container = styled.div`
  flex-direction: column;

  padding: 5.75rem 0;
`

export const TitleContainer = styled.div`
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`

export const TitleTextContainer = styled.div`
  flex-direction: column;
  gap: 4.125rem;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`

export const TitleTextWrapper = styled.div`
  flex-direction: column;
  gap: 1rem;

  :first-child {
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    font-size: 3rem;
    font-weight: 800;
  }

  :last-child {
    line-height: 130%;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`

export const TitlePerksWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PerkWrapper = styled.div<PerkIconProps>`
  gap: 0.75rem;
  align-items: center;

  div {
    height: 2rem;
    width: 2rem;
    background-color: ${(props) => props.color};

    align-items: center;
    justify-content: center;

    border-radius: 1000px;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  @media screen and (max-width: 950px) {
    justify-content: center;
  }
`

export const CatalogContainer = styled.div`
  flex-direction: column;
  margin-top: 5.75rem;

  > span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 32px;
    line-height: 130%;
    font-weight: 800;

    padding: 2rem 0;
  }
`

export const CatalogGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1.25rem;
  grid-column-gap: 2rem;

  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
