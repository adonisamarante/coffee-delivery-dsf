import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  gap: 1.75rem;

  margin-top: 5rem;

  :last-child {
    justify-content: space-between;
    align-items: center;
  }
`

export const TitleWrapper = styled.div`
  flex-direction: column;
`

export const AddressWrapper = styled.div`
  max-width: 32.875rem;
  height: fit-content;

  padding: 2.5rem;
  border: 1px solid black;
  border-radius: 6px 36px 6px 36px;

  justify-content: space-between;
`
