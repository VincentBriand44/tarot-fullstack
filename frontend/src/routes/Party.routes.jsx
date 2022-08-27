import { useContext } from 'react'

import PartyContext from '@contexts/PartyContext'

import PartyIn from '@components/PartyIn'
import PartySetupDealer from '@components/PartySetupDealer'
import PartySetupPlayers from '@components/PartySetupPlayers'

const Party = () => {
  const { partyIn, dealer, partyPlayers } = useContext(PartyContext)

  return partyPlayers.length !== 5 ? (
    <PartySetupPlayers />
  ) : !dealer ? (
    <PartySetupDealer />
  ) : partyIn ? (
    <PartyIn />
  ) : (
    <p className='text-lg font-bold text-slate-200'>Aucune partie en cours</p>
  )
}

export default Party
