import React, { useState, useContext, useEffect, createContext } from 'react'

// hooks
import { get, set } from '../Hooks/useLocalStorage.js'

const MoneyContext = createContext()
const MoneyContextUpdate = createContext()

export const useMoney = () => {
  return useContext(MoneyContext)
}

export const useMoneyUpdate = () => {
  return useContext(MoneyContextUpdate)
}

export const UserMoneyContextProvider = ({children}) => {
  const curLocalStorage = get('userMoney')
  const initialState = curLocalStorage ?? 300
  const [money, setMoney] = useState(initialState)
  set('userMoney', initialState)

  const updateMoney = (roomCost, action) => {
    let newMoney;
    switch (action) {
      case 'return':
        newMoney = money + roomCost
        break;
    
      default:
        newMoney = money - roomCost
        break;
    }
    if (newMoney < 0) {
      return 'You dont have enough money to purchase!'
    } else 
      setMoney(newMoney)
  }

  useEffect(() => {
    set('userMoney', money)
  }, [money])

  return (
    <MoneyContext.Provider value={money}>
      <MoneyContextUpdate.Provider value={updateMoney}>
        {children}
      </MoneyContextUpdate.Provider>
    </MoneyContext.Provider>
  )
}