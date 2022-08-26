import { useContext } from 'react'
import GlobalContext from '../contexts/globalContext'

const Logout = () => {
  const { setLoggedIn } = useContext(GlobalContext)

  setLoggedIn(false)
}

export default Logout
