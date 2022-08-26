import { createContext, useState } from 'react'

const PartyContext = createContext()

export function PartyContextProvider({ children }) {
  const [partyIn, setPartyIn] = useState(true)
  const [dealer, setDealer] = useState()
  const [rounds, setRounds] = useState([])
  const [partyPlayers, setPartyPlayers] = useState([])

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
        partyPlayers,
        setPartyPlayers
      }}
    >
      {children}
    </PartyContext.Provider>
  )
}

export default PartyContext
