import { useContext, useState } from 'react'
import { Trash2 } from 'react-feather'
import GlobalContext from '../contexts/globalContext'

const Players = () => {
  const { players, setPlayers } = useContext(GlobalContext)
  const [input, setInput] = useState('')

  const handleDelete = i => {
    setPlayers(players.filter(e => e.id !== i))
  }

  const addPlayer = () => {
    input.length >= 3
      ? setPlayers([
          ...players,
          { id: players[players.length - 1].id + 1, name: input }
        ])
      : alert('Le nom du joueur doit contenir au moins 3 caractères')
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
        <div className='w-full flex gap-2'>
          <input
            className='rounded-lg py-2 px-4 w-1/2'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            className='px-4 py-2 bg-slate-800 w-1/2 text-center rounded-xl m-auto text-slate-200 font-bold hover:text-green-600'
            onClick={() => addPlayer()}
          >
            Ajouter un joueur
          </button>
        </div>
      </div>
    </>
  )
}

export default Players
