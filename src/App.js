import React from 'react'

// contexts
import { RoomsContextProvider } from './Contexts/RoomContext'
import { ActionContextProvider } from './Contexts/ActionContext'

// components
import NavBar from './Components/NavBar'
import Body from './Components/Body'

export default function App() {
  return (
    <div className="App">
      <RoomsContextProvider>
        <ActionContextProvider>
          <NavBar />
          <Body />
        </ActionContextProvider>
      </RoomsContextProvider>
    </div>
  )
}