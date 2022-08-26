import { useRoutes } from 'react-router-dom'

import MainLayout from '@layouts/MainLayout'
import Account from '@routes/Account.routes'
import Calendar from '@routes/Calendar.routes'
import Finish from '@routes/Finish.routes'
import History from '@routes/History.routes'
import Home from '@routes/Home.routes'
import Logout from '@routes/Logout.routes'
import Party from '@routes/Party.routes'
import Players from '@routes/Players.routes'
import Settings from '@routes/Settings.routes'

const App = () => {
  const username = 'John Doe'

  let element = useRoutes([
    {
      path: '/',
      element: <MainLayout username={username} />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/calendar',
          element: <Calendar />
        },
        {
          path: '/players',
          element: <Players />
        },
        {
          path: '/history',
          element: <History />
        },
        {
          path: '/party',
          element: <Party />
        },
        {
          path: '/finish',
          element: <Finish />
        },
        {
          path: '/account',
          element: <Account />
        },
        {
          path: '/settings',
          element: <Settings />
        },
        {
          path: '/logout',
          element: <Logout />
        }
      ]
    }
  ])

  return element
}

export default App
