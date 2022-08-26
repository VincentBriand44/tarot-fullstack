import { createContext, useState } from 'react'

const PartyContext = createContext()

export function PartyContextProvider({ children }) {
  const [partyIn, setPartyIn] = useState(true)
  const [dealer, setDealer] = useState()
  const [rounds, setRounds] = useState([
    [0, 0, 0, 10, 0],
    [0, 0, 0, 10, 0],
    [0, 0, 0, 10, 0],
    [0, 0, 0, 10, 0],
    [0, 0, 0, 10, 0],
    [0, 0, 0, 10, 0]
  ])
  const [players] = useState([
    { id: 0, name: 'Christian' },
    { id: 1, name: 'Didier' },
    { id: 2, name: 'Kiki' },
    { id: 3, name: 'Maxime' },
    { id: 4, name: 'Stephane' }
  ])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PartyContext.Provider
      value={{
        partyIn,
        setPartyIn,
        dealer,
        setDealer,
        rounds,
        setRounds,
        players
      }}
    >
      {children}
    </PartyContext.Provider>
  )
}

export default PartyContext
