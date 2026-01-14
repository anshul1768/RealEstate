import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  </>
  
))


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
