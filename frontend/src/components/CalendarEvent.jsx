import { Trash2 } from 'react-feather'

const CalendarEvent = ({ event, index, handleDelete }) => {
  return (
    <div
      key={index}
      className='flex justify-between bg-slate-500 p-4 rounded-lg'
    >
      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold text-slate-900'>
          C&apos;est le tour de
          <span className='font-bold'>{` ${event.drink} `}</span>
          chez
          <span className='font-bold'>{` ${event.at}`}</span>
        </h3>
        <p>le {event.date}</p>
      </div>
      {/* Ajouter la suppresion */}
      <Trash2
        className='text-red-600 hover:text-red-400'
        size='18'
        onClick={() => handleDelete(event.id)}
      />
    </div>
  )
}

export default CalendarEvent
