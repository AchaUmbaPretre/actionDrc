import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { ArrowDropDown, BarChart, FacebookOutlined, Instagram, LinkedIn, Search, Twitter } from '@mui/icons-material'
import actions from "./../../img/actionssarl.PNG"

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
                    <BarChart className='navbar-bar' onClick={handBar}/>
                    <ul className={ bar ? "navbar-ul navbarOpen" : "navbar-ul"}>
                        <li className="navbar-li"><Link to={''} className={active ? "bleu-link" : "navbar-link"}>Accueil</Link></li>
                        <li className="navbar-li"><Link to={''} className={active ? "bleu-link" : "navbar-link"}>Apropos</Link></li>
                        <li className="navbar-li"><Link to={''} className={active ? "bleu-link" : "navbar-link"}>Equipe</Link></li>
                        <li className="navbar-li"><Link to={''} className={active ? "bleu-link" : "navbar-link"}>Services</Link></li>
                        <li className="navbar-li"><Link to={''} className={active ? "bleu-link" : "navbar-link"}>Faq</Link></li>
                        <li className="navbar-li"><Link to={''}  className={active ? "bleu-link" : "navbar-link"}>Contact</Link></li>
                        <div className={active ? "navbar-rsx-blue" : "navbar-rsx"}>
                            <FacebookOutlined className='navbar-icon'/>
                            <Twitter className='navbar-icon'/>
                            <Instagram className='navbar-icon'/>
                            <LinkedIn className='navbar-icon'/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar