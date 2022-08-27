import { useContext } from 'react'

import GlobalContext from '@contexts/globalContext'
import PartyContext from '@contexts/PartyContext'

const PartySetupPlayers = () => {
  const { players } = useContext(GlobalContext)
  const { partyPlayers, setPartyPlayers } = useContext(PartyContext)

  return (
    <>
      {/* Terminer cette feature */}
      <p className='text-white text-lg mb-4 sm:text-3xl'>Qui participe ? </p>
      {players.map(player => (
        <button
          key={player.id}
          className={`px-4 py-2 bg-slate-800 w-64 text-center rounded-xl m-auto text-slate-200 font-bold hover:text-green-600 ${
            partyPlayers.map(pp => player === pp).includes(true)
              ? 'bg-green-600'
              : ''
          }`}
          onClick={() =>
            partyPlayers.map(pp => player === pp).includes(true)
              ? setPartyPlayers(partyPlayers.filter(pp => pp !== player))
              : setPartyPlayers([...partyPlayers, player])
          }
        >
          {player.name}
        </button>
      ))}
    </>
  )
}

export default PartySetupPlayers
