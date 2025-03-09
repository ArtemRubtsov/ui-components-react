import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactNode
  containerId: string
}

export function Portal({ children, containerId }: Props) {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let element = document.getElementById(containerId)
    let created = false

    if (!element) {
      element = document.createElement('div')
      element.id = containerId
      document.body.appendChild(element)
      created = true
    }

    if (element !== container) {
      setContainer(element)
    }

    return () => {
      if (created && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [containerId])

  return container ? createPortal(children, container) : null
}
