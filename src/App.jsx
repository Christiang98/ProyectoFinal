import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PageHome } from './Pages/PageHome'
import MyClub from "./Pages/PageMyClub"
import PageNews from './Pages/PageNews'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='news' element={<PageNews />} />
        <Route path='myClub' element={<MyClub />} />
      </Routes>
    </>
  )
}

export default App
