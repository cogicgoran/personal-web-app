import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from '../components/pages/homepage/Homepage'
import About from '../components/pages/about/About'
import NotFound from '../components/pages/not-found/NotFound'
import Career from '../components/pages/career/Career'

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
    path: "/career",
    Component: Career
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
