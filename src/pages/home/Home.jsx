import Apropos from "../../components/apropos/Apropos"
import Clients from "../../components/clients/Clients"
import Navbar from "../../components/navbar/Navbar"
import Services from "../../components/services/Services"
import Slider from "../../components/slider/Slider"
import Topbar from "../../components/topbar/Topbar"
import "./home.scss"

const Home = () => {

  return (
    <>
        <div>
            <div className="home-containeer">
                <Topbar/>
                <div className="home-navbar">
                    <Navbar/>
                    <Slider/>
                    <Apropos/>
                    <Clients/>
                    <Services/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
