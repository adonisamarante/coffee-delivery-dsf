import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 5rem;
  width: 23rem;

  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;

  background-color: ${(props) => props.theme['base-card']};

  img {
    height: 4rem;
    width: 4rem;
  }
`

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: start;
`

export const ItemInfoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  :first-child {
    color: ${(props) => props.theme['base-subtitle']};
  }

  :last-child {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
  }
`

export const ItemInfoSectionButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`
