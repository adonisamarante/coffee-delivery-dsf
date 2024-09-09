import { Trash } from 'phosphor-react'
import { StyledButtonRemove } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface IButtonRemoveProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonRemove(props: IButtonRemoveProps) {
  return (
    <StyledButtonRemove {...props}>
      <Trash className="trashIcon" size={14} />
      REMOVER
    </StyledButtonRemove>
  )
}
