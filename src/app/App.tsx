import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from '../components/pages/homepage/Homepage'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Homepage
  }, 
  {
    path: "*",
    Component: function (){return <div>Oops, not found <Link to="/">Homepage</Link></div>}
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
