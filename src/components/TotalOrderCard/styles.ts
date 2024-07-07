import styled from 'styled-components'

interface CardSelectButtonProps {
  isSelected: boolean
}

export const CardSelectButton = styled.button<CardSelectButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: ${(props) => (props.isSelected ? 'calc(1rem - 2px)' : '1rem')};
  border: ${(props) =>
    props.isSelected ? `solid 2px ${props.theme.purple}` : 'none'};
  border-radius: 6px;

  background-color: ${(props) =>
    props.isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  .card-icon {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
