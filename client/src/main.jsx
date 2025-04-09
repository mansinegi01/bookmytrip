import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout/>}>
      <Route path='/'element={<Login/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
