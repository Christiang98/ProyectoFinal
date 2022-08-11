import React from 'react'
import "./ContentsHome.css"


export const ContentsHome = () => {
    return (
        <><div className='containerHomme'>
            <h1 className='sectionInicio'>Bienvenidos a Footdev  </h1>
            <h3 className="sectionSubtitle"> Para todos los amantes del football les traemos la imformacion  y las mejores noticias de todas las ligas profesionales,
                ligas internacionales , ligas europeas y ligas locales .. 
                Mas una seccion para armar tu equipo</h3>
            <div className="containerIcons">
                <img className='iconChampions' src='https://assets.stickpng.com/images/5842fe0ea6515b1e0ad75b3c.png' />
                <img className='iconInternational' src="http://pngimg.com/uploads/fifa/fifa_PNG2.png" />
                <img className='iconLibertadores' src="https://i.pinimg.com/originals/11/2b/65/112b65d08e4b1ea4a44cd3ea7f532b5a.png" />
                <img className='iconLocal' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png" />

            </div>
            <div className="containerButton">
        <button className="PageButton"> Registrate</button>
        </div>
        </div>
        
        </>
    )
}
export default ContentsHome