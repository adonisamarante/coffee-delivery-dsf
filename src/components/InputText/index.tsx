import { useState } from 'react'
import { InputContainer, InputField, InputPlaceholder } from './styles'

interface InputTextProps {
  isOptional?: boolean
  placeholder?: string
}

export function InputText({
  isOptional = false,
  placeholder = '',
}: InputTextProps) {
  const [value, setValue] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <InputContainer>
      <InputField
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {!value && (
        <>
          <InputPlaceholder position="end">
            {isOptional ? `Opcional` : ''}
          </InputPlaceholder>
        </>
      )}
    </InputContainer>
  )
}
