import { styled } from 'styled-components'

interface PerkIconProps {
  color?: string
}

export const TitleContainer = styled.div`
  justify-content: space-between;

  padding: 5.75rem 0;
`

export const TitleTextContainer = styled.div`
  flex-direction: column;
  gap: 4.125rem;
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
`

export const TitlePerksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;
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
`
