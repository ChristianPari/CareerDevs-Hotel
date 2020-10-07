// using this to render the correct display
// user clicks rent then the state will change to rent and render the Rent Component within the body
// or if the user clicks return it will render the Return Component

import React, { useState, useContext, createContext } from 'react'

const ActionContext = createContext()
const ActionContextUpdate = createContext()

export function useAction() {
  return useContext(ActionContext)
}

export function useActionUpdate() {
  return useContext(ActionContextUpdate)
}

export function ActionContextProvider({children}) {
  const [action, setAction] = useState('')

  const updateAction = (value) => {
    setAction(value)
  }

  return (
    <ActionContext.Provider value={action}>
      <ActionContextUpdate.Provider value={updateAction}>
        {children}
      </ActionContextUpdate.Provider>
    </ActionContext.Provider>
  )
}