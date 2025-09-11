import React from 'react'

interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}
