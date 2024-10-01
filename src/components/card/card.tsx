import React from 'react'

import styles from './card.module.scss'

export const divType = ['string', 'number', 'boolean'] as const
export type TypeDiv = (typeof divType)[number]

type Props = {
  customType: TypeDiv
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({ className, customType, ...props }: Props) => {
  const cardClass = `${styles.card} ${className || ''}`

  return (
    <div className={cardClass} {...props}>
      {customType === 'string' && <p>This is a string type</p>}
      {customType === 'number' && <p>This is a number type</p>}
      {customType === 'boolean' && <p>This is a boolean type</p>}
    </div>
  )
}
