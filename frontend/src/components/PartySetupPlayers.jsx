import { useContext } from 'react'

import GlobalContext from '@contexts/globalContext'

const PartySetupPlayers = ({ partyPlayers, setPartyPlayers }) => {
  const { players } = useContext(GlobalContext)

  return (
    <>
      {/* Terminer cette feature */}
      <p className='text-white text-lg mb-4 sm:text-3xl'>Qui participe ? </p>
      <p className='text-red-600 text-sm '>
        <span className='font-bold'>En développement: </span>
        Ne pas cliquer deux fois sur un même joueur
      </p>
      {players.map(player => (
        <button
          key={player.id}
          className='px-4 py-2 bg-slate-800 w-64 text-center rounded-xl m-auto text-slate-200 font-bold hover:text-green-600'
          onClick={() => setPartyPlayers([...partyPlayers, player])}
        >
          {player.name}
        </button>
      ))}
    </>
  )
}

export default PartySetupPlayers
