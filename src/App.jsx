import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Exclusive from "./pages/Exclusive"
import Explore from "./pages/Explore"
import ErrorPage from "./pages/ErrorPage"
import ListYourProperty from "./pages/FooterPage/ListYourProperty";
import ViewExclusive from "./pages/ViewExclusive"
import ExclusiveLayout from "./layout/ExclusiveLayout"
import UserManagement from "./components/UserManagement"

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
      },
      {
        path:"/user-management",
        element:(<UserManagement/>)
      },
      {
        path:"/list-your-property",
        element:(<ListYourProperty/>)
      },
    ]
  },
  {
    path: "/viewExclusive",    // new route
    element: <ExclusiveLayout />, // different layout
    children: [
      { path: "/viewExclusive", element: <ViewExclusive /> }
    ],
  }
  
  ])

  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App
