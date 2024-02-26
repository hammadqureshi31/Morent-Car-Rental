import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderWraper from './components/header/HeaderWraper'
import FooterWraper from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
      <HeaderWraper />
      <Outlet />
      <FooterWraper />

    </>
  )
}

export default App
