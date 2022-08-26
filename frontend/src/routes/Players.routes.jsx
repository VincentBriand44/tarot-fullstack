import { useContext } from 'react'
import { Trash2 } from 'react-feather'
import GlobalContext from '../contexts/globalContext'

const Players = () => {
  const { players, setPlayers } = useContext(GlobalContext)

  const handleDelete = i => {
    setPlayers(players.filter(e => e.id !== i))
  }

  return (
    <>
      <h1 className='text-4xl text-slate-200 font-bold mb-8'>Joueurs</h1>
      <div className='sm:w-1/2 w-full'>
        {players.map(player => (
          <div
            key={player.id}
            className='flex justify-between items-center mb-2 gap-2'
          >
            <p className='text-slate-200 font-semibold bg-slate-800 py-2 rounded-lg w-full text-center'>
              {player.name}
            </p>
            <Trash2
              className='text-red-600 hover:text-red-400'
              size='18'
              onClick={() => handleDelete(player.id)}
            />
          </div>
        ))}
      </div>
      <button className='px-4 py-2 bg-slate-800 w-64 text-center rounded-xl m-auto text-slate-200 font-bold hover:text-green-600'>
        {' '}
        Ajouter un joueur
      </button>
    </>
  )
}

export default Players
