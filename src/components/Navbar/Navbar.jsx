import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Navbar.css"
import { Tab, Tabs } from '@mui/material';


export default function Navbar() {
    return (
        <AppBar style={{backgroundColor:"#283618",color:"white",height:"85px"}}>
            <Toolbar>
                    <Typography >
                        <img className='iconNavbar' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3MlVNk4jW-9SjkBc6SPnNUG3S0p5DHF2vMUiag4AkDTphtF9jOWbmYglkiTW2oCw7E3R_xz5UQo82ODsU1r-1EhUwl9oBbreMd99bS_wUvwO1cDtCeUZWYHFY8PwfFgolkSayBwz-hF4zhZiO7gnOOvvn3T2lLcTIcuwGp4aTDlCmgRaGthG2cxCvrw/s633/Al%20Rihla.png"/>
                    </Typography>
                    <h1 className='textNavbar'>Footdev</h1>
                    <Tabs className='menuNavbar'>
                        <Tab style={{color:"white",fontSize:"30px"}} label="Inicio"/>
                        <Tab  style={{color:"white",fontSize:"30px"}}label="Noticias"/>
                        <Tab  style={{color:"white",fontSize:"30px"}}label="Tu Club"/>
                        <Tab  style={{color:"white",fontSize:"30px"}}label="Equipos"/>
                    </Tabs>
                    </Toolbar>
              </AppBar>
        
    );
}