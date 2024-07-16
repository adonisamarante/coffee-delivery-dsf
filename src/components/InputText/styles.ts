import { styled } from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const InputPlaceholder = styled.span<{ position: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme['base-label']};
  pointer-events: none;
  ${(props) => (props.position === 'start' ? 'left: 10px;' : 'right: 10px;')}
`

export const InputField = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem; /* Adjust padding to accommodate the placeholders */
  box-sizing: border-box;
  border-radius: 4px;

  &:focus {
    border: 2px solid ${(props) => props.theme['yellow-dark']};
  }
`
