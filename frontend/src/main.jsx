import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login/Login.jsx'
import Signup from "./components/SignUp/Signup.jsx"
import axios from 'axios'

useEffect(()=>{
  axios.get('/test')
  .then((resonse)=>{
    console.log(resonse.data)
  })
  .catch((err)=>{
    console.log(err)
  })
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='/'element={<Login/>} />
      <Route path='signup'element={<Signup/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
