import { useContext } from 'react'
import { Link } from 'react-router-dom'

import PartyContext from '@contexts/PartyContext'

import PartyForm from '@components/PartyForm'
import PartyTable from '@components/PartyTable'

const PartyIn = () => {
  const { setPartyIn } = useContext(PartyContext)

  return (
    <div className='flex flex-col items-center w-full'>
      <PartyTable />
      <PartyForm />
      <Link
        to='/finish'
        className='px-4 py-2 my-2 bg-slate-800 w-64 text-center rounded-xl mx-auto text-slate-200 font-bold hover:text-red-600'
        onClick={() => setPartyIn(false)}
      >
        Terminer la partie
      </Link>
    </div>
  )
}

export default PartyIn
