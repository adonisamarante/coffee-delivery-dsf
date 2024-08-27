import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return <StyledButton {...props}>{props.text || 'Button'}</StyledButton>
}
