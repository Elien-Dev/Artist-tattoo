//  import moduls
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import router components
import Home from "./routes/Home"
import Artist_tattoo from "./routes/Artist_Tattoo"
import Services from "./routes/Services"
import Gallery_Tattoo from "./routes/Gallery_Tattoo"
import About_us from "./routes/About_us";
import ErrorPage from "./error-page"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/artist-tattoo',
    element: <Artist_tattoo />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/gallery-tattoo",
    element: <Gallery_Tattoo />
  },
  {
    path: "/about us",
    element: <About_us />
  }
])

const App = () => {
  return ( 
  <RouterProvider router={router}/>
  )
};

export {App}