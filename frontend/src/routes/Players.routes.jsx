import React, { useContext } from 'react'
import GlobalContext from '../contexts/globalContext'

const Players = () => {
  const { players } = useContext(GlobalContext)

  return (
    <>
      <h1 className='text-4xl text-slate-200 font-bold mb-8'>Joueurs</h1>
      <div>
        {players.map(player => (
          <div key={player.id} className='flex justify-between'>
            <p className='text-slate-200 font-semibold mb-2 mx-2'>
              {player.name}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Players
