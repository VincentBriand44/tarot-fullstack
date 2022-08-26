import React from 'react'
import { LogOut } from 'react-feather'
import { NavLink } from 'react-router-dom'

const HeaderDropdown = () => {
  const links = [
    { name: 'Mon compte', path: '/account' },
    { name: 'Mes paramètres', path: '/settings' }
  ]

  return (
    <div className='bg-slate-900 text-sm p-4 rounded-lg flex flex-col top-16 absolute right-8 sm:right-16'>
      {links.map((link, index) => (
        <NavLink
          to={link.path}
          key={index}
          className='flex items-center gap-2 hover:bg-slate-800 rounded-lg p-2'
        >
          {link.name}
        </NavLink>
      ))}
      <NavLink
        className='text-red-400 mt-4 flex items-center gap-2 hover:bg-slate-800 rounded-lg p-2'
        to='/logout'
      >
        <LogOut size='16' />
        Se déconnecter
      </NavLink>
    </div>
  )
}

export default HeaderDropdown
