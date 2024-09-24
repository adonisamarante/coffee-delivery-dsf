import styled from 'styled-components'

interface IStyleProps {
  bgColor: string
}

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  gap: 1.75rem;

  margin-top: 5rem;

  > :last-child {
    justify-content: space-between;
    align-items: center;
  }
`

export const TitleWrapper = styled.div`
  flex-direction: column;

  :first-child {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    font-weight: 900;
    font-size: 2rem;
  }

  :last-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const ConfirmationInfoWrapper = styled.div`
  max-width: 32.875rem;
  height: fit-content;

  padding: 2.5rem;
  border: 1px solid black;
  border-radius: 6px 36px 6px 36px;

  flex-direction: column;
  gap: 2rem;
`

export const InfoSection = styled.div`
  align-items: center;
  gap: 0.75rem;
`

export const IconWrapper = styled.div<IStyleProps>`
  width: fit-content;
  padding: 8px;
  background-color: ${(props) => props.theme[props.bgColor]};
  border-radius: 1000px;

  align-items: center;
  justify-content: center;
`

export const InfoWrapper = styled.div`
  color: ${(props) => props.theme['base-text']};

  flex-direction: column;

  span {
    font-size: 1rem;
    line-height: 130%;
  }

  .bold-span {
    font-weight: 700;
  }
`
