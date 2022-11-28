import axios from 'axios'
import { useContext, useState } from 'react'
import { Trash2 } from 'react-feather'

import GlobalContext from '../contexts/globalContext'

const Players = () => {
  const { players, setPlayers } = useContext(GlobalContext)
  const [input, setInput] = useState('')

  const handleDelete = i => {
    players.length > 1 &&
      axios
        .delete(import.meta.env.VITE_BACKEND_URL + '/players/' + i)
        .then(() => setPlayers(players.filter(player => player.id !== i)))
  }

  const addPlayer = () => {
    if (input.length >= 3) {
      axios
        .post(import.meta.env.VITE_BACKEND_URL + '/players', { name: input })
        .then(res => res.status === 201 && setPlayers([]))
        .catch(err => console.error(err))
    } else alert('Le nom du joueur doit contenir au moins 3 caractères')
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
            <p className='text-slate-200 font-semibold bg-slate-800 py-2 rounded-lg w-full text-center capitalize'>
              {player.name}
            </p>
            <Trash2
              className='text-red-600 hover:text-red-400 cursor-pointer'
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
