import Apropos from "../../components/apropos/Apropos"
import Clients from "../../components/clients/Clients"
import Contact from "../../components/contact/Contact"
import Equipe from "../../components/equipe/Equipe"
import Faq from "../../components/faq/Faq"
import Footer from "../../components/footer/Footer"
import Formation from "../../components/formation/Formation"
import LinePage from "../../components/linePage/LinePage"
import Navbar from "../../components/navbar/Navbar"
import Services from "../../components/services/Services"
import Slider from "../../components/slider/Slider"
import Specialite from "../../components/specialite/Specialite"
import Topbar from "../../components/topbar/Topbar"
import Villes from "../../components/villes/Villes"
import "./home.scss"

const Home = () => {

  return (
    <>
        <div>
            <div className="home-container">
                <Topbar/>
                <div className="home-navbar">
                    <Navbar/>
                    <Slider/>
                    <Apropos/>
                    <Clients/>
                    <Services/>
                    <Specialite/>
                    <Equipe/>
                    <Formation/>
                    <Faq/>
                    <Villes/>
                    <Contact/>
                    <Footer/>
                    <LinePage/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
