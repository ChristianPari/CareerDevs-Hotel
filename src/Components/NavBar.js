import React from 'react'

// components
import Text from './Text'
import Button from './Button'

// contexts
import { useActionUpdate } from '../Contexts/ActionContext'

export default function NavBar() {
  const actionUpdate = useActionUpdate()

  return (
    <div>
      <Text 
        tag='h1'
        text='CareerDevs Hotel'
      />
      <div className='action-btns'>
        <Button 
          label='Rent a Room'
          onClick={() => {
            actionUpdate('rent')
          }}
        />
        <Button 
          label='Return a Room'
          onClick={() => {
            actionUpdate('return')
          }}
        />
      </div>
    </div>
  )
}