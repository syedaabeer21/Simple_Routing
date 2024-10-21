
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'product',
        element:<Products/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
)
