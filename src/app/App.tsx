import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from '../components/pages/homepage/Homepage'
import About from '../components/pages/about/About'
import NotFound from '../components/pages/not-found/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Homepage,
  }, 
  {
    path: "/about",
    Component: About
  },
  {
    path: "*",
    Component: NotFound
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
