import './slider.scss'
import { Link } from 'react-router-dom'
import logo from '../../img/actionssarl-removebg-preview.png'
import { LocalPhoneOutlined, TrendingFlat } from '@mui/icons-material'
const Slider = () => {
  return (
    <>
        <div className="slider">
            <div className="slider-container">
                <div className="slider-left">
                    <h1 className="slider-h1">Ensemble c’est possible</h1>
                    <p className="slider-desc">Bienvenue sur le portail de <strong>ACTIONS SARL</strong>, votre Agence en Douane et 
                    partenaire de confiance pour le placement de personnel .
                    Nous sommes basés à Kinshasa et nous avons une présence bien établie dans tout le pays, notamment
                    dans les zones minières à forte activité économique.
                    </p>
                    <div className="slider-rows-btn">
                        <Link href="" className="slider-btn">savoir plus <TrendingFlat/></Link>
                        <Link href="" className="slider-btn slider-diff">contactez nous <TrendingFlat/></Link>
                    </div>
                </div>
                <div className="slider-right">
                    <img src={logo} alt="" className="slider-img" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Slider