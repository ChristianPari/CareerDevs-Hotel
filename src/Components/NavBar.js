import React from 'react'

// components
import Text from './Text'
import Button from './Button'

// contexts

export default function NavBar() {
  return (
    <div>
      <Text 
        tag='h1'
        text='CareerDevs Hotel'
      />
      <Button 
        label='Rent a Room'
      />
      <Button 
        label='Return a Room'
      />
    </div>
  )
}