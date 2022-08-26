import { createContext, useState } from 'react'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [players, setPlayers] = useState([
    { id: 1, name: 'Christian' },
    { id: 2, name: 'Didier' },
    { id: 3, name: 'Kiki' },
    { id: 4, name: 'Maxime' },
    { id: 5, name: 'Stephane' },
    { id: 6, name: 'Vincent' }
  ])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        players,
        setPlayers
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
export { GlobalContextProvider }
