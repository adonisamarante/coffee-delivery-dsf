import { styled } from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const InputPlaceholder = styled.span<{ position: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  pointer-events: none;
  ${(props) => (props.position === 'start' ? 'left: 10px;' : 'right: 10px;')}
`

export const InputField = styled.input`
  padding: 10px 40px; /* Adjust padding to accommodate the placeholders */
  box-sizing: border-box;
`
