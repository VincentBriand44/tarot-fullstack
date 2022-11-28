import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [parties, setParties] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    players.length === 0 &&
      axios
        .get(import.meta.env.VITE_BACKEND_URL + '/players')
        .then(res => setPlayers(res.data))
  }, [players])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        players,
        setPlayers,
        parties,
        setParties
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
export { GlobalContextProvider }
