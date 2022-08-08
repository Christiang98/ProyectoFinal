import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <>
    <footer id="contacto">
                <div className="contenedor-footer-content">
                    <div className="contacto-creadores">
                        <h2 className="brand">FootDev</h2>
                        <p className="p">Somos una empresa con larga trayectoria</p>
                    </div>
                    <div className="social-media">
                        <a href="https://github.com/MileaFerrario" class="social-media-icon">
                            <i className='bx bxl-github'></i>
                        </a>
                        <a href=" https://www.linkedin.com/in/william-coca-08782b15b" class="social-media-icon">
                            <i className='bx bxl-linkedin-square'></i>
                        </a>
                        <a href="https://www.instagram.com/ferrariomilea/" class="social-media-icon">
                            <i className='bx bxl-instagram'></i>
                      
                            <box-icon type='logo' name='instagram'></box-icon>
                        </a>
                    </div>
                </div>
            </footer>
    </>
  )
}
export default Footer