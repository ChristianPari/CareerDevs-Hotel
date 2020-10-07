import React, {useState, useEffect, useContext, createContext } from 'react'

// utils
import initialState from '../utils/initialState'
import { set, get } from '../Hooks/useLocalStorage'

const RoomsContext = createContext()
const RoomsContextUpdate = createContext()

export function useRooms() {
  return useContext(RoomsContext)
}

export function useRoomsUpdate() {
  return useContext(RoomsContextUpdate)
}

export function RoomsContextProvider({children}) {
  const currentLocalStorage = get('rooms')
  const begState = currentLocalStorage ?? initialState()
  const [rooms, setRooms] = useState(begState)
  set('rooms', begState)
  
  const rentRoom = (room, renter) => {
    const allRooms = [...rooms]
    const floorIdx = Number(room[0]) - 1
    const roomIdx = Number(room[2]) - 1
    allRooms[floorIdx][roomIdx].renter = renter

    setRooms([...allRooms])
  }

  const returnRoom = (room, returner) => {
    const allRooms = [...rooms]
    const floorIdx = Number(room[0]) - 1
    const roomIdx = Number(room[2]) - 1
    
    if (allRooms[floorIdx][roomIdx].renter === returner) {
      allRooms[floorIdx][roomIdx].renter = null

      setRooms([...allRooms])
    }
    else
      return 'Invalid Returner'
  }

  useEffect(() => {
    set('rooms', rooms)
  }, [rooms])

  return (
    <RoomsContext.Provider value={rooms}>
      <RoomsContextUpdate.Provider value={{
        rentRoom, returnRoom
      }}>
        {children}
      </RoomsContextUpdate.Provider>
    </RoomsContext.Provider>
  )
}