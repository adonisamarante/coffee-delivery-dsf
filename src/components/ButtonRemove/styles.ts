import styled from 'styled-components'

export const StyledButtonRemove = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 0.75rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-subtitle']};

  .trashIcon {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
  }
`
