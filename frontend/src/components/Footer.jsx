import { Calendar, Home, Users } from 'react-feather'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const routes = [
    { name: 'Accueil', path: '/', icon: <Home size='16' /> },
    { name: 'Joueurs', path: '/players', icon: <Users size='16' /> },
    { name: 'Calendrier', path: '/calendar', icon: <Calendar size='16' /> }
  ]
  return (
    <div className='w-full flex justify-around h-16 bg-slate-800 items-center text-slate-400 font-semibold select-none fixed bottom-0'>
      {routes.map((route, index) => (
        <NavLink
          to={route.path}
          className='bg-slate-900 px-4 py-2 rounded-lg flex gap-2 items-center hover:text-slate-100'
          key={index}
        >
          {route.icon}
          {route.name}
        </NavLink>
      ))}
    </div>
  )
}

export default Footer
