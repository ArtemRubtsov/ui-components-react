import React from 'react'

import clsx from 'clsx'

import styles from './card.module.scss'

export const divType = ['string', 'number', 'boolean'] as const
export type TypeDiv = (typeof divType)[number]

type Props = {
  customType: TypeDiv
  src: string
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({ className, customType, ...props }: Props) => {
  return (
    <div className={clsx(styles.card)} {...props}>
      <div>
        <div>
          <img
            alt={'card'}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKxZyGxPm80foBrXlr9yPalS8Xp7WgoPHIQ&s'
            }
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis illum,
          veritatis numquam saepe voluptatibus atque laudantium similique ut qui itaque aperiam
          porro cum. Sed fugit temporibus ab ipsam ullam?
        </p>
      </div>
    </div>
  )
}
