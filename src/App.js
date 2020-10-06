import React from 'react'

// contexts
import {RoomsContextProvider} from './Contexts/RoomContext'

// components
import NavBar from './Components/NavBar'
import Body from './Components/Body'

export default function App() {
  return (
    <div className="App">
      <RoomsContextProvider>
        <NavBar />
        <Body />
      </RoomsContextProvider>
    </div>
  )
}