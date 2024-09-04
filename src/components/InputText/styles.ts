import { styled } from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const InputPlaceholder = styled.span<{ position: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${(props) => (props.position === 'start' ? 'left: 10px;' : 'right: 10px;')}

  color: ${(props) => props.theme['base-label']};
  font-size: 0.75rem;
  font-style: italic;
`

export const InputField = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem; /* Adjust padding to accommodate the placeholders */
  // box-sizing: border-box;
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }

  border: 2px solid ${(props) => props.theme['base-button']};

  &:focus {
    border: 2px solid ${(props) => props.theme['yellow-dark']};
  }
`
