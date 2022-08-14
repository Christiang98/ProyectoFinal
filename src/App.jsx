import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import News from "./Pages/News"
import MyClub from "./Pages/MyClub"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import './App.css'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='news' element={<News />} />
        <Route path='myClub' element={<MyClub />} />
        <Route path='register' element={<Register/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}
 
export default App
