import { useState } from 'react'
import './App.css'
import ListBabies from './components/ListBabies'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BabyComponent from './components/BabyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* http://localhost:5173 */}
          <Route path='/' element={<ListBabies/>}></Route>
          {/* http://localhost:5173/babies */}
          <Route path='/babies' element={<ListBabies/>}></Route>
          {/* http://localhost:5173/add-baby */}
          <Route path='/add-baby' element={<BabyComponent/>}></Route>
          {/* http://localhost:5173/edit-baby/1 */}
          <Route path='/edit-baby/:id' element={<BabyComponent/>}></Route>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
