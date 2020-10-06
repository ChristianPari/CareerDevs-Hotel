import React, {useState, useContext, createContext } from 'react'

// utils
import initialState from '../utils/initialState'
import { set } from '../Hooks/useLocalStorage'

const RoomsContext = createContext()
const RoomsContextUpdate = createContext()

export function useRooms() {
  return useContext(RoomsContext)
}

export function useRoomsUpdater() {
  return useContext(RoomsContextUpdate)
}

export function RoomsContextProvider({children}) {
  const begState = initialState()
  const [rooms, setRooms] = useState(begState)
  set('rooms', begState)
  
  const updateRooms = (room, renter) => {
    const allRooms = [...rooms]
    const idx = Number(room[0]) - 1
    allRooms[idx].forEach(obj => {
      if (obj.room === room) {
        obj[renter] = renter
      }
    });
    setRooms([...allRooms])
  }

  return (
    <RoomsContext.Provider value={rooms}>
      <RoomsContextUpdate.Provider value={updateRooms}>
        {children}
      </RoomsContextUpdate.Provider>
    </RoomsContext.Provider>
  )
}