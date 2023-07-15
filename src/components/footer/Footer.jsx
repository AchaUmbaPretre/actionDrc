import { Link } from 'react-router-dom'
import './footer.scss'
import { Facebook, Instagram, LinkedIn, LocationOn, Mail, Phone, Twitter } from '@mui/icons-material'
import logo from '../../img/actionssarl.PNG'

const Footer = () => {
  return (
    <>
         <footer className="footer">
        <div className="footer-container">
            <div className="experience-container">
                <div className="footer-rows">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={logo} alt="" className="footer-img"/>
                        </div>
                        <div className="footer-desc"><strong>ACTIONSDRC</strong> Nous sommes une entreprise de droit congolais, Agence en
                          Douane et de Placement de Personnel. Nous sommes basés à Kinshasa et nous avons une présence bien établie dans
                          tout le pays.
                        </div>
                    </div>
                    <div className="footer-center1">
                        <h2 className="footer-h2">Get Help</h2>
                        <ul className="footer-ul">
                            <li><Link to="#accueil" className="footerLi">Accueil</Link></li>
                            <li><Link to="#apropos" className="footerLi">A propos</Link></li>
                            <li><Link to="#apropos" className="footerLi">Equipe</Link></li>
                            <li><Link to="#services" className="footerLi">Services</Link></li>
                            <li><Link to="#faq" className="footerLi">Faq</Link></li>
                            <li><Link to="#contact" className="footerLi">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-center2">
                        <h2 className="footer-h2">Contact</h2>
                        <div className="footer-icons">
                            <LocationOn className='icons-footer'/>
                            <div className="contact-right-row">
                                <span className="footer-desc">25 avenue de l'OUA Q/GB Commune de Ngaliema</span>
                            </div>
                        </div>

                        <div className="footer-icons">
                            <Phone className='icons-footer'/>
                            <div className="contact-right-row">
                                <span className="footer-desc">+243 819 444 440</span>
                            </div>
                        </div>

                        <div className="footer-icons">
                            <Mail className='icons-footer'/>
                            <div className="footer-right-row">
                                <div className="footer-desc"><Link to="https://Info@actionsdrc.com" className="footer-desc">Info@actionsdrc.com</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <h2 className="footer-h2">Newsletter</h2>
                        <input type="text" className="footer-input" placeholder="Entrer votre email.."/>
                        <div className="footer-sociaux">
                            <div className="footer-social">
                              <Facebook className='icon-footer'/>
                            </div>
                            <div className="footer-social">
                              <Twitter className='icon-footer'/>
                            </div>
                            <div className="footer-social">
                              <LinkedIn className='icon-footer'/>
                            </div>
                            <div className="footer-social">
                              <Instagram className='icon-footer'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer