import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Ahinsa1 from './details/Ahinsa1.jsx'
import Ahinsa2 from './details/Ahinsa2.jsx'
import Ahinsa3 from './details/Ahinsa3.jsx'
import Ahinsa4 from './details/Ahinsa4.jsx'
const router=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/property/1' element={<Ahinsa1/>}></Route>
  <Route path='/property/2' element={<Ahinsa2/>}></Route>
  <Route path='/property/3' element={<Ahinsa3/>}></Route>
  <Route path='/property/4' element={<Ahinsa4/>}></Route>
  </>
  
))


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
