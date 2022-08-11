import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <footer id="contacto">
                <div className="contenedor-footer-content">
                    <div className="contacto-creadores">
                        <h2 className="brand">FootDev</h2>
                        <p className="p">Siguiendo el mundo del deporte</p>
                    </div>
                    <div className="social-media">
                        <a href="https://github.com/Christiang98" class="social-media-icon">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a href=" https://www.linkedin.com/in/william-coca-08782b15b" class="social-media-icon">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://www.instagram.com/wcoca/" class="social-media-icon">
                            <ion-icon name="logo-instagram"></ion-icon>
                            <box-icon type='logo' name='instagram'></box-icon>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer