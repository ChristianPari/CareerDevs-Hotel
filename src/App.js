import React from 'react'

// contexts
import { RoomsContextProvider } from './Contexts/RoomContext'
import { ActionContextProvider } from './Contexts/ActionContext'
import { UserMoneyContextProvider } from './Contexts/UserMoneyContext'

// components
import NavBar from './Components/NavBar'
import Body from './Components/Body'

export default function App() {
  return (
    <div className="App">
      <RoomsContextProvider>
        <UserMoneyContextProvider>
          <ActionContextProvider>
            <NavBar />
            <Body />
          </ActionContextProvider>
        </UserMoneyContextProvider>
      </RoomsContextProvider>
    </div>
  )
}