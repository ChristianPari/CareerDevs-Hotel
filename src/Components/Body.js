import React from 'react'

// components
import Text from './Text'
import Rent from './Rent'
import Return from './Return'

// contexts
import { useAction } from '../Contexts/ActionContext'

export default function Body() {
  const action = useAction()

  // switch statement handles the Component Rendering
  switch (action) {
    case 'rent':
      return (
        <Rent />
      )
  
    case 'return':
      return (
        <Return />
      )

    default:
      return (
          <Text 
            tag='h3'
            text="Please click 'Rent a Room' or 'Return a Room' to continue!"
            id='defaultMsg'
          />
      )
  }
}