import React, { useEffect, useState } from 'react'
import './navbar.scss'
import {FacebookOutlined, Instagram, LinkedIn,Twitter } from '@mui/icons-material'
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';
import actions from "./../../img/actionssarl.PNG"
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [bar, setBar] = useState(false)
    
    const handBar = () =>{
        setBar(!bar)
    }
    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    },[])
  return (
    <>
        <div className = {active ? "navbar bleu" : "navbar" }>
            <div className="navbar-wrapper">
                <img src={actions} alt="" className="navbar-logo"/>
                <div className="navbar-right">
                    <ul className={ bar ? "navbar-ul navbarOpen" : "navbar-ul"}>
                        <li className="navbar-li"><a href={'#accueil'} className={active ? "bleu-link" : "navbar-link"}>Accueil</a></li>
                        <li className="navbar-li"><a href={'#apropos'} className={active ? "bleu-link" : "navbar-link"}>Apropos</a></li>
                        <li className="navbar-li"><a href={'#equipe'} className={active ? "bleu-link" : "navbar-link"}>Equipe</a></li>
                        <li className="navbar-li"><a href={'#services'} className={active ? "bleu-link" : "navbar-link"}>Services</a></li>
                        <li className="navbar-li"><a href={'#faq'} className={active ? "bleu-link" : "navbar-link"}>Faq</a></li>
                        <li className="navbar-li"><a href={'#contact'}  className={active ? "bleu-link" : "navbar-link"}>Contact</a></li>
                        <div className={active ? "navbar-rsx-blue" : "navbar-rsx"}>
                            <span className="nav-bar-login"><a href=""><LoginIcon className='login-icon'/> Login</a></span>
                            <span className="nav-bar-login"><a href="">Register</a></span>
                        </div>
                    </ul>
                    {bar ? <CloseIcon className='navbar-bar active-red' onClick={handBar}/>:<ClearAllIcon className='navbar-bar' onClick={handBar}/> }
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar