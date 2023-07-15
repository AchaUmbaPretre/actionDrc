import { Link } from 'react-router-dom'
import './footer.scss'

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
                            <i class="fa-solid fa-location-dot icons-footer"></i>
                            <div class="contact-right-row">
                                <span class="footer-desc">Benseke Numero 8, Commune de Kintambo, Kinshasa</span>
                            </div>
                        </div>

                        <div class="footer-icons">
                            <i class="fa-solid fa-phone icons-footer"></i>
                            <div class="contact-right-row">
                                <span class="footer-desc">+243819932813 <br/> +243897224610</span>
                            </div>
                        </div>

                        <div class="footer-icons">
                            <i class="fa-regular fa-envelope icons-footer"></i>
                            <div class="footer-right-row">
                                <span class="footer-desc">nyotacsn@gmail.com <br/><a href="https://cs-nyota.org<" class="footer-desc">https://cs-nyota.org</a></span>
                            </div>
                        </div>
                    </div>
                    <div class="footer-right">
                        <h2 class="footer-h2">Newsletter</h2>
                        <input type="text" class="footer-input" placeholder="Entrer votre email.."/>
                        <div class="footer-sociaux">
                            <div class="footer-social">
                                <i class="fab fa-facebook icon-footer"></i>
                            </div>
                            <div class="footer-social">
                                <i class="fab fa-twitter icon-footer"></i>
                            </div>
                            <div class="footer-social">
                                <i class="fab fa-linkedin icon-footer"></i>
                            </div>
                            <div class="footer-social">
                                <i class="fab fa-instagram icon-footer"></i>
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