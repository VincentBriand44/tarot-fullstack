import { useContext } from 'react'

import PartyContext from '@contexts/PartyContext'

const PartySetupDealer = () => {
  const { setDealer, partyPlayers } = useContext(PartyContext)

  return (
    <>
      <p className='text-white text-lg mb-4 sm:text-3xl'>
        Qui commence à distribuer ?
      </p>
      {partyPlayers.map(player => (
        <button
          key={player.id}
          className='px-4 py-2 bg-slate-800 w-64 text-center rounded-xl m-auto text-slate-200 font-bold hover:text-green-600'
          onClick={() => setDealer(player.id)}
        >
          {player.name}
        </button>
      ))}
    </>
  )
}

export default PartySetupDealer
