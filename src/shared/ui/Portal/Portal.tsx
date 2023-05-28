import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode // what the element
  element?: HTMLElement // To the element
}

export const Portal: FC<PortalProps> = ({ children, element }) => (
  createPortal(children, element)
)
