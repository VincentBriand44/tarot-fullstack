import { useContext } from 'react'

import PartyContext from '@contexts/PartyContext'

const PartyTable = () => {
  const { dealer, rounds, partyPlayers } = useContext(PartyContext)

  return (
    <>
      <table className='bg-slate-800 w-full rounded-lg overflow-hidden'>
        <thead className='bg-slate-900 text-slate-300 font-bold'>
          <tr className='h-8'>
            {partyPlayers.map(player => (
              <td
                key={player.id}
                className={`w-1/5 text-center ${
                  player.id === dealer && 'text-red-500'
                }`}
              >
                {player.name}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rounds.map((round, index) => (
            <tr key={index}>
              {round.map((score, index) => (
                <td
                  key={index}
                  className='w-1/5 text-center text-slate-300 p-1'
                >
                  {score}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {rounds.length === 0 && (
        <p className='bg-slate-800 rounded-lg text-center text-slate-300 p-1 left-0 w-full'>
          Il n&apos;y aucune manche d&apos;ajouté
        </p>
      )}
    </>
  )
}

export default PartyTable
