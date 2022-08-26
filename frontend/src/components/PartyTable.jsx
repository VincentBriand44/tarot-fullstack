const PartyTable = ({ rounds, players, dealer }) => {
  return (
    <table className='bg-slate-800 w-full rounded-lg overflow-hidden'>
      <thead className='bg-slate-900 text-slate-300 font-bold'>
        <tr className='h-8'>
          {players
            .sort((a, b) => a.id - b.id)
            .map((player, index) => (
              <td
                key={player.id}
                className={`w-1/5 text-center ${
                  index === dealer && 'text-red-500'
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
              <td key={index} className='w-1/5 text-center text-slate-300 p-1'>
                {score}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PartyTable
