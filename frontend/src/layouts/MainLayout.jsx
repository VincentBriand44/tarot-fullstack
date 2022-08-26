import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '@components/Footer'
import Header from '@components/Header'
import GlobalContext from '@contexts/globalContext'
import Login from '@routes/Login.routes'

const BasicLayout = ({ username }) => {
  const { loggedIn } = useContext(GlobalContext)
  const [headerOpen, setHeaderOpen] = useState(false)

  return (
    <div
      className='flex flex-col min-h-screen bg-slate-700'
      onClick={() => headerOpen && setHeaderOpen(false)}
    >
      <Header
        username={username}
        headerOpen={headerOpen}
        setHeaderOpen={setHeaderOpen}
      />
      <main className='flex flex-col items-center p-10 gap-4 mb-16'>
        {loggedIn ? <Outlet /> : <Login />}
      </main>
      <Footer />
    </div>
  )
}

export default BasicLayout
