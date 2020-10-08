import React from 'react'

// components
import Text from './Text'
import Button from './Button'

// contexts
import { useActionUpdate } from '../Contexts/ActionContext'
import { useRooms, useRoomsUpdate } from '../Contexts/RoomContext'
import { useMoneyUpdate } from '../Contexts/UserMoneyContext'

export default function Return() {
  const actionUpdater = useActionUpdate()
  const roomsUpdater = useRoomsUpdate().returnRoom
  const allRooms = useRooms()
  const moneyUpdater = useMoneyUpdate()

  const unavailableRooms = []
  allRooms.forEach(floor => {
    floor.forEach(room => {
      if (room.renter !== null)
        unavailableRooms.push(room)
    })
  });

  return (
    <div 
      className='return'
      style={{...returnStyle}}
    >
      {unavailableRooms.length !== 0 ? 
        unavailableRooms.map(room => {
          return (
            <div 
              className='rented'
              id={room.room}
              style={{...roomStyle}}
            >
              <Text 
                tag='h3'
                text={`Room ${room.room}`}
              />
              <Text 
                tag='h4'
                text={`Renter: ${room.renter}`}
              />
              <Button 
                label='Return?'
                onClick={() => {
                  const name = prompt('Enter Name')
                  const process = roomsUpdater(room.room, name)
                  if (process !== undefined)
                    alert(process)
                  else {
                    moneyUpdater(room.price, 'return')
                    actionUpdater('')
                  }
                }}
              />
            </div>
          )
        }) :
        <div className='default-return'>
          <Text 
            tag='h3'
            text='There are no rented rooms at this time...'
          />
        </div>
      }
    </div>
  )
}

const returnStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '1%'
}

const roomStyle = {
  margin: '1%'
}