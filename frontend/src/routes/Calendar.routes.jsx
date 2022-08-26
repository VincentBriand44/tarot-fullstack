import { useContext, useState } from 'react'
import { PlusSquare } from 'react-feather'

import CalendarEvent from '../components/CalendarEvent'
import CalendarForm from '../components/CalendarForm'
import GlobalContext from '../contexts/globalContext'

const CalendarPage = () => {
  const { players } = useContext(GlobalContext)
  const [at, setAt] = useState(players[0].name)
  const [drink, setDrink] = useState(players[0].name)
  const [date, setDate] = useState()
  const [events, setEvents] = useState([
    {
      id: 0,
      at: 'Christian',
      drink: 'Christian',
      date: '01/03/2019'
    },
    {
      id: 1,
      at: 'Christian',
      drink: 'Didier',
      date: '07/04/2020'
    },
    {
      id: 2,
      at: 'Kiki',
      drink: 'Kiki',
      date: '14/02/2019'
    }
  ])

  const [handleAdd, setHandleAdd] = useState(false)

  const handleDelete = i => {
    setEvents(events.filter(e => e.id !== i))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setEvents([...events, { at: at, drink: drink, date: date }])
  }
  return (
    <>
      <h1 className='text-4xl text-slate-200 font-bold mb-8'>Calendrier</h1>
      <div className='bg-slate-800 p-4 rounded-lg w-full sm:w-1/2'>
        <div className='flex justify-between'>
          <h2 className='text-slate-200 uppercase font-semibold mb-2 mx-2'>
            Prochaines Parties
          </h2>
          <PlusSquare
            className='text-slate-400 hover:text-slate-200'
            onClick={() => setHandleAdd(!handleAdd)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          {events
            .sort(
              (a, b) =>
                new Date(...a.date.split('/').reverse()) -
                new Date(...b.date.split('/').reverse())
            )
            .map((event, index) => (
              <CalendarEvent
                key={index}
                event={event}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
      {handleAdd && (
        <CalendarForm
          handleSubmit={handleSubmit}
          drink={drink}
          setDrink={setDrink}
          at={at}
          setAt={setAt}
          date={date}
          setDate={setDate}
          players={players}
        />
      )}
    </>
  )
}

export default CalendarPage
