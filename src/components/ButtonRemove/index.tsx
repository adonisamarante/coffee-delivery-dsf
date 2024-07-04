import { Trash } from 'phosphor-react'
import { StyledButtonRemove } from './styles'

export function ButtonRemove() {
  return (
    <StyledButtonRemove>
      <Trash className="trashIcon" size={14} />
      REMOVER
    </StyledButtonRemove>
  )
}
