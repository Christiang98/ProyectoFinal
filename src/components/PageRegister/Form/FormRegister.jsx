import React from 'react'
import "./FormRegister.css"

export const FormRegister = () => {
  return (
    <>
      <div>
        <div className='logoRegister'>
          <img className='imgLogo' src="https://i.postimg.cc/jqH6qFZx/ballch.png" />
          <h3 className='titleLogo'>FootDev</h3>
        </div>
        <h1 className='titleRegister'>Registrate</h1>
        <p className='infoRegister'>Registrate para poder disfrutar de todo nuestro contenido</p>
        <form className='containerForm'>
          <input className='imputRegister' type="text" name='name' placeholder='Nombre' required />
          <input className='imputRegister' type="text" name='lastName' placeholder='Apellido' required />
          <input className='imputRegister' type="text" name='userName' placeholder='Usuario' required />
          <input className='imputRegister' type="text" name='myClub' placeholder='Tu club' required />
          <input className='imputRegister' type="email" name='email' placeholder='Email' required />
          <input className='imputRegister' type="password" name='password' placeholder='Contraseña' required />
          <input className='imputRegister' type="password" name='password2' placeholder='Repetir contraseña' required />
          <button id="buttonRegister" className='imputRegister' type='submit'>Registrarse</button>
        </form>
      </div>
    </>
  )
}

export default FormRegister