import { Link } from 'react-router-dom'
import './footer.scss'
import { Facebook, Instagram, LinkedIn, LocationOn, Mail, Phone, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
         <footer class="footer">
        <div class="footer-container">
            <div class="experience-container">
                <div class="footer-rows">
                    <div class="footer-left">
                        <div class="footer-logo">
                            <img src="./img/logo.jpg" alt="" class="footer-img"/>
                        </div>
                        <div class="footer-desc"><strong>ACTIONSDRC</strong> Avec son histoire riche, son corps enseignant qualifié et son engagement envers la réussite de chaque élève, Nyota incarne la poursuite du savoir et la préparation des futurs leaders congolais. Elle brille, somme toute, comme un symbole d'excellence éducative au Congo.</div>
                    </div>
                    <div class="footer-center1">
                        <h2 class="footer-h2">Get Help</h2>
                        <ul class="footer-ul">
                            <li><Link to="#accueil" class="footerLi">Accueil</Link></li>
                            <li><Link to="#question" class="footerLi">A propos</Link></li>
                            <li><Link to="#apropos" class="footerLi">Equipe</Link></li>
                            <li><Link to="#vision" class="footerLi">Services</Link></li>
                            <li><Link to="#renseignement" class="footerLi">Faq</Link></li>
                            <li><Link to="#contact" class="footerLi">Contact</Link></li>
                        </ul>
                    </div>
                    <div class="footer-center2">
                        <h2 class="footer-h2">Contact</h2>
                        <div class="footer-icons">
                            <LocationOn className='icons-footer'/>
                            <div class="contact-right-row">
                                <span class="footer-desc">25 avenue de l'OUA Quartier GB Commune de Ngaliema</span>
                            </div>
                        </div>

                        <div class="footer-icons">
                            <Phone className='icons-footer'/>
                            <div class="contact-right-row">
                                <span class="footer-desc">+243 819 444 440</span>
                            </div>
                        </div>

                        <div class="footer-icons">
                            <Mail className='icons-footer'/>
                            <div class="footer-right-row">
                                <div class="footer-desc"><Link to="https://Info@actionsdrc.com<" class="footer-desc">Info@actionsdrc.com</Link></div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-right">
                        <h2 class="footer-h2">Newsletter</h2>
                        <input type="text" class="footer-input" placeholder="Entrer votre email.."/>
                        <div class="footer-sociaux">
                            <div class="footer-social">
                              <Facebook className='icon-footer'/>
                            </div>
                            <div class="footer-social">
                              <Twitter className='icon-footer'/>
                            </div>
                            <div class="footer-social">
                              <LinkedIn className='icon-footer'/>
                            </div>
                            <div class="footer-social">
                              <Instagram className='icon-footer'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copy">&#169 LoginSmort. tous droits réservés</p>
        </div>
    </footer>
    <a href="" class="scrollup" id="scroll-up" onclick='scrollToTop();'>
        <i class="fa-solid fa-arrow-up scrollup-icon"></i>
    </a>

    </>
  )
}

export default Footer