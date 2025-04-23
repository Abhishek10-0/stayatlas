import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Exclusive from "./pages/Exclusive"
import Explore from "./pages/Explore"
import ErrorPage from "./pages/ErrorPage"

function App() {

  const appRouter = createBrowserRouter([{
    path:"/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:(<Home/>)
      },
      {
        path:"/booking",
        element:(<Booking/>)
      },
      {
        path:"/exclusive",
        element:(<Exclusive/>)
      },
      {
        path:"/explore",
        element:(<Explore/>)
      }
    ]
  }])

  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App
