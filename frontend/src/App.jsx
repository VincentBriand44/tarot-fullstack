import { useRoutes } from 'react-router-dom'

import Main from '@layouts/Main.layouts'

import Home from '@routes/Home.routes'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ])

  return element
}

export default App
