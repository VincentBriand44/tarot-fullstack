import { useContext, useEffect } from 'react'

import GlobalContext from '@contexts/globalContext'
import PartyContext from '@contexts/PartyContext'

const Finish = () => {
  const { rounds, partyPlayers } = useContext(PartyContext)
  const { partyAll, setPartyAll } = useContext(GlobalContext)
  const total = [0, 0, 0, 0, 0]

  rounds.map(round =>
    round.map((result, index) => (total[index - 1] += result))
  )

  const finishParty = () => {
    rounds.length !== 0 && setPartyAll([...partyAll, total])
  }

  useEffect(() => {
    return finishParty()
  }, [])

  return (
    <>
      <p className='text-red-600 text-sm '>
        <span className='font-bold'>En développement: </span>
        Fonctionnalité à venir
      </p>
      {partyPlayers.map((player, index) => (
        <p key={player.id}>
          {player.name} : {total[index]}
        </p>
      ))}
    </>
  )
}

export default Finish
