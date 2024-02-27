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
