import { InputHTMLAttributes } from 'react'
import { InputContainer, InputField, InputPlaceholder } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  isOptionalFilled?: boolean
}

export function InputText({
  isOptional = false,
  isOptionalFilled = false,
  ...props
}: InputTextProps) {
  return (
    <InputContainer>
      <InputField {...props} />
      {!isOptionalFilled && isOptional && (
        <InputPlaceholder position="end">Opcional</InputPlaceholder>
      )}
    </InputContainer>
  )
}
