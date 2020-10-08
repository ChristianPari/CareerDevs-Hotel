import React from 'react'

// components
import Text from './Text'
import Button from './Button'

// contexts
import { useActionUpdate } from '../Contexts/ActionContext'
import { useRooms } from '../Contexts/RoomContext'
import { useMoney } from '../Contexts/UserMoneyContext'

export default function NavBar() {
  const actionUpdate = useActionUpdate()
  const rooms = useRooms()
  const roomsAvailable = available(rooms)
  const userMoney = useMoney()


  return (
    <div>
      <Text 
        tag='h1'
        text='CareerDevs Hotel'
      />
      <Text 
        tag='h3'
        text={`Currently there are ${roomsAvailable} rooms available`}
      />
      <Text 
        tag='h3'
        text={`You currently have $${userMoney}`}
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

function available(allRooms) {
  let final = 0

  allRooms.forEach(floor => {
    floor.forEach(room => {
      if (room.renter === null)
        final += 1
    });
  });

  return final
}