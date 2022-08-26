import { createContext, useState } from 'react'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [players, setPlayers] = useState([
    { id: 0, name: 'Christian' },
    { id: 1, name: 'Didier' },
    { id: 2, name: 'Kiki' },
    { id: 3, name: 'Maxime' },
    { id: 4, name: 'Stephane' },
    { id: 5, name: 'Vincent' }
  ])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider
      value={{
        players,
        setPlayers,
        loggedIn,
        setLoggedIn
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
export { GlobalContextProvider }
