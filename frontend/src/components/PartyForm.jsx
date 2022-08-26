import { useState } from 'react'

const PartyForm = ({ players, rounds, setRounds, dealer, setDealer }) => {
  const [score, setScore] = useState(0)
  const [lead, setLead] = useState(0)
  const [subLead, setSubLead] = useState(-1)

  const handleSubmit = e => {
    e.preventDefault()

    const round = []

    players.forEach(player => {
      if (player.id === lead) {
        round[player.id] = score
      } else if (player.id === subLead) {
        round[player.id] = score / 2
      } else {
        round[player.id] = score * -1
      }
    })

    const newRounds = [...rounds, round]
    setRounds(newRounds)
    setLead(0)
    setSubLead(-1)
    setScore(0)
    setDealer(dealer >= players.length - 1 ? 0 : dealer + 1)
  }
  return (
    <form className='flex my-2 w-full gap-2' onSubmit={e => handleSubmit(e)}>
      <div className='flex gap-2 w-full'>
        <input
          type='number'
          className='rounded-lg py-2 px-4 w-full'
          value={score}
          onChange={e => setScore(e.target.value)}
          required
        />
        <select
          className='rounded-lg py-2 px-4'
          value={lead}
          onChange={e => setLead(parseInt(e.target.value))}
        >
          {players.map(player => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </select>
        {score !== 0 && (
          <select
            className='rounded-lg py-2 px-4'
            value={subLead}
            onChange={e => setSubLead(parseInt(e.target.value))}
          >
            <option value='alone'>Seul</option>
            {players
              .filter(player => player.id !== lead)
              .map(player => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
          </select>
        )}
      </div>
      <input
        type='submit'
        className='bg-slate-800 w-64 text-center rounded-xl text-slate-200 font-bold hover:text-green-600'
      />
    </form>
  )
}

export default PartyForm
