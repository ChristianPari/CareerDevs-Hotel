// TODO Make the component only display the button if there are available rooms, otherwise display a default msg
import React from 'react'

// components
import Button from './Button'

// contexts
import { useActionUpdate } from '../Contexts/ActionContext'
import { useRooms, useRoomsUpdate } from '../Contexts/RoomContext'

export default function Rent() {
  const actionUpdate = useActionUpdate()
  const allRooms = useRooms()
  const roomsUpdater = useRoomsUpdate().rentRoom

  return (
    <div className='rent'>
      <Button 
        label='Express Checkout'
        onClick={() => {
          const name = prompt('Enter your name!')
          const room = rentCheapest(allRooms, name)
          roomsUpdater(room, name)
          actionUpdate('')
        }}
      />
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
  
  return cheapestRoom.room
}