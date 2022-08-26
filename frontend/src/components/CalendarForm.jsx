import Calendar from 'react-calendar'

const CalendarForm = ({
  handleSubmit,
  at,
  setAt,
  drink,
  setDrink,
  date,
  setDate,
  players
}) => {
  return (
    <div className='flex flex-col items-center justify-between mt-8'>
      <h2 className='text-slate-200 uppercase font-semibold mb-2 mx-2'>
        Ajouter une partie
      </h2>

      <form
        className='flex flex-col text-slate-200 w-full font-medium'
        onSubmit={e => handleSubmit(e)}
      >
        <label htmlFor='at' className='text-center my-1'>
          C&apos;est le tour de
        </label>
        <select
          className='rounded-lg py-2 px-4 text-slate-800'
          value={drink}
          onChange={e => setDrink(e.target.value)}
        >
          {players.map(player => (
            <option key={player.id} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>
        <label htmlFor='drink' className='text-center my-1'>
          chez
        </label>
        <select
          className='rounded-lg py-2 px-4 text-slate-800'
          value={at}
          onChange={e => setAt(e.target.value)}
        >
          {players.map(player => (
            <option key={player.id} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>
        <label htmlFor='date' className='text-center my-1'>
          le
        </label>
        <Calendar
          name='date'
          className='bg-slate-500 p-4 rounded-lg text-center'
          onClickDay={e => setDate(e.toLocaleDateString())}
          minDate={new Date()}
        />
        {date && (
          <input
            type='submit'
            className='px-4 py-2 bg-slate-800 rounded-xl w-64 m-auto mt-4'
          />
        )}
      </form>
    </div>
  )
}

export default CalendarForm
