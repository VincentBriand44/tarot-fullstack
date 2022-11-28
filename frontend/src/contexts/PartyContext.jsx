import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const PartyContext = createContext()

export function PartyContextProvider({ children }) {
  const [partyIn, setPartyIn] = useState(false)
  const [dealer, setDealer] = useState()
  const [rounds, setRounds] = useState([])
  const [partyPlayers, setPartyPlayers] = useState([])
  const [party, setParty] = useState([])

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + '/party/start')
      .then(res => setParty(res.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    if (partyPlayers.length === 0) {
      if (party.length > 0) {
        setPartyPlayers(party.players)
        setPartyIn(true)
      }
    } else if (partyPlayers.length === 5 && dealer === undefined) {
      const inserts = []
      partyPlayers.map(player => inserts.push({ player_id: player.id }))
      axios
        .post(import.meta.env.VITE_BACKEND_URL + '/party/players', inserts)
        .then(res => res.status === 201)
        .catch(err => console.error(err))
    }
  }, [partyPlayers])

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
