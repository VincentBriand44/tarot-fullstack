import { useState } from 'react'

const PartyForm = ({ partyPlayers, rounds, setRounds, dealer, setDealer }) => {
  const [score, setScore] = useState('')
  const [lead, setLead] = useState(0)
  const [subLead, setSubLead] = useState(-1)

  const handleSubmit = e => {
    e.preventDefault()

    const round = []

    partyPlayers.forEach(player => {
      if (player.id === lead) {
        round[player.id] = score
      } else if (player.id === subLead) {
        round[player.id] = score / 2
      } else {
        round[player.id] = (score / 2) * -1
      }
    })

    const newRounds = [...rounds, round]
    setRounds(newRounds)
    setLead(0)
    setSubLead(-1)
    setScore(0)
    setDealer(
      dealer !== partyPlayers[4].id
        ? partyPlayers.find(player => player.id === dealer + 1).id
        : partyPlayers[0].id
    )
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
          {partyPlayers.map(player => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </select>
        {score !== '' && (
          <select
            className='rounded-lg py-2 px-4'
            value={subLead}
            onChange={e => setSubLead(parseInt(e.target.value))}
          >
            <option value='alone'>Seul</option>
            {partyPlayers
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
