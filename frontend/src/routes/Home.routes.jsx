import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PartyContext from '../contexts/PartyContext'

const Home = () => {
  const { partyIn, setPartyIn } = useContext(PartyContext)

  const handleClick = () => {
    setPartyIn(true)
  }

  return (
    <div className='w-full flex justify-center'>
      <Link
        to='/party'
        className='px-4 py-2 bg-slate-800 w-64 text-center rounded-xl m-auto text-slate-200 font-bold hover:text-green-600'
        onClick={() => handleClick()}
      >
        {partyIn ? 'Partie en cours' : 'Démarrer une partie'}
      </Link>
    </div>
  )
}

export default Home
