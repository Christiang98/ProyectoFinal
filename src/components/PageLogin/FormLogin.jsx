import React, { useState } from 'react'
import "./FormLogin.css"

export const FormLogin = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = (event) => {
    event.preventDefault()
  }
  const handleUserNameChange=(event)=>{
setUserName(()=>event.target.value)
  }
 const handlePasswordChange=(event)=>{
  setPassword(()=>event.target.value)
 }
  return (
    <>
      <div>
        <div className='logoLogin'>
          <img className='imgLogo' src="https://i.postimg.cc/jqH6qFZx/ballch.png" />
          <h3 className='titleLogo'>FootDev</h3>
        </div>
        <h1 className='titleLogin'>Iniciar sesion</h1>
        <form className='containerFormLogin'>
          <input className='imputLogin' type="text" name='userName' placeholder='Usuario' required value={userName} onChange={handleUserNameChange} />
          <input className='imputLogin' type="password" name='password' placeholder='Contraseña' required value={password} onChange={handlePasswordChange} />
          <button id="buttonLogin" className='imputLogin' type='submit' onClick={handleLogin}>Ingresa</button>
        </form>
      </div>
    </>
  )
}

export default FormLogin