import { useContext } from 'react'
import { Link } from 'react-router-dom'

import PartyContext from '@contexts/PartyContext'

import PartyForm from '@components/PartyForm'
import PartySetupDealer from '@components/PartySetupDealer'
import PartySetupPlayers from '@components/PartySetupPlayers'
import PartyTable from '@components/PartyTable'

const Party = () => {
  const {
    partyIn,
    setPartyIn,
    dealer,
    setDealer,
    rounds,
    setRounds,
    partyPlayers,
    setPartyPlayers
  } = useContext(PartyContext)

  return partyPlayers.length !== 5 ? (
    <PartySetupPlayers
      partyPlayers={partyPlayers}
      setPartyPlayers={setPartyPlayers}
    />
  ) : !dealer ? (
    <PartySetupDealer partyPlayers={partyPlayers} setDealer={setDealer} />
  ) : partyIn ? (
    <div className='flex flex-col items-center w-full'>
      <PartyTable rounds={rounds} partyPlayers={partyPlayers} dealer={dealer} />
      <PartyForm
        partyPlayers={partyPlayers}
        rounds={rounds}
        setRounds={setRounds}
        dealer={dealer}
        setDealer={setDealer}
      />
      <Link
        to='/finish'
        className='px-4 py-2 my-2 bg-slate-800 w-64 text-center rounded-xl mx-auto text-slate-200 font-bold hover:text-red-600'
        onClick={() => setPartyIn(false)}
      >
        Terminer la partie
      </Link>
    </div>
  ) : (
    <p className='text-lg font-bold text-slate-200'>Aucune partie en cours</p>
  )
}

export default Party
