import { User } from 'react-feather'

import HeaderDropdown from '@components/HeaderDropdown'

const Header = ({ username, headerOpen, setHeaderOpen }) => {
  const handleClick = () => {
    setHeaderOpen(!headerOpen)
  }
  return (
    <div className='w-full flex sm:justify-center h-16 bg-slate-800 items-center text-slate-500 font-bold text-xl px-8'>
      <h1 className='select-none'>Tarot</h1>
      <div
        className='absolute right-8 sm:right-16 flex gap-2 text-sm items-center hover:text-slate-200 cursor-pointer'
        onClick={() => handleClick()}
      >
        <span>{username}</span>
        <div className='rounded-full bg-slate-900 p-2'>
          <User />
        </div>
      </div>
      {headerOpen && <HeaderDropdown />}
    </div>
  )
}

export default Header
