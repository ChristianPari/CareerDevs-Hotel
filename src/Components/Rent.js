import React from 'react'

// components
import Button from './Button'
import Text from './Text'

// contexts
import { useActionUpdate } from '../Contexts/ActionContext'
import { useRooms, useRoomsUpdate } from '../Contexts/RoomContext'
import { useMoneyUpdate } from '../Contexts/UserMoneyContext'

export default function Rent() {
  const actionUpdate = useActionUpdate()
  const allRooms = useRooms()
  const roomsUpdater = useRoomsUpdate().rentRoom
  const roomsAvailable = checkAvailable(allRooms)
  const moneyUpdater = useMoneyUpdate()

  return (
    <div className='rent'>
      { roomsAvailable ?
        <Button 
          label='Express Checkout'
          onClick={() => {
            let name = prompt('Enter your name!')
            if (name === null)
              return
            if (name.length > 20 || name.length <= 0)
              name = prompt('Name cannot exceed 20 characters or be blank, enter again!')
            const room = rentCheapest(allRooms, name)
            const valid = moneyUpdater(room.price)
            if (valid === undefined) {
              roomsUpdater(room.room, name)
              actionUpdate('')
            } else {
              alert(valid)
            }
          }}
        /> :
        <Text 
          tag='h2'
          text='Unfortunately there are no available rooms, check back later'
        />
      }
    </div>
  )
}

function rentCheapest(allRooms, name) {

  let cheapestRoom = null;

  allRooms.forEach(floor => {
    floor.forEach(room => {
      if (room.renter === null) {
        if (cheapestRoom === null) {
          cheapestRoom = room

        } else {
          const price = room.price
          if (price < cheapestRoom.price) {
            cheapestRoom = room
          }
        }
      }
    });
  });
  
  return cheapestRoom
}

function checkAvailable(allRooms) {
  let final = false

  allRooms.forEach(floor => {
    floor.forEach(room => {
      if (room.renter === null)
        final = true
    });
  });

  return final
}