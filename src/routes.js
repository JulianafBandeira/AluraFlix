import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Inicio } from './pages/Inicio'
import { NovoVideo } from './pages/NovoVideo'


function AppRoutes() {



  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path='/novovideo' element={<NovoVideo />}></Route>
        </Routes>
      </BrowserRouter>

    
  )

}

export default AppRoutes
