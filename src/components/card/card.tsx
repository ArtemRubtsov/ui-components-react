import React from 'react'
export const divType = ['string', 'number', 'boolean'] as const
export type TypeDiv = (typeof divType)[number]

type Props = {
  customType: TypeDiv
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({ className, ...props }: Props) => {
  return (
    <>
      <div className={className} {...props} />
    </>
  )
}
