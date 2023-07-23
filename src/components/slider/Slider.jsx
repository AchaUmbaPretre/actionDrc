import './slider.scss'
import fondLeft from '../../img/fond-left.png'
import fondCopie from '../../img/fond_-_Copie-removebg-preview.png'
import {TrendingFlat } from '@mui/icons-material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Slider = () => {
  return (
    <>
        <div className="slider" id='accueil'>
            <div className="slider-container">
                <div className="slider-left">
                    <h1 className="slider-h1" data-aos="fade-up-right">Ensemble c’est possible</h1>
                    <p className="slider-desc" data-aos="fade-up-left">Bienvenue sur le portail de <strong>ACTIONS SARL</strong>, votre Agence en Douane et 
                    partenaire de confiance pour le placement de personnel .
                    Nous sommes basés à Kinshasa et nous avons une présence bien établie dans tout le pays, notamment
                    dans les zones minières à forte activité économique.
                    </p>
                    <div className="slider-rows-btn">
                        <a href="#apropos" className="slider-btn">savoir plus <PlayCircleIcon className='icons-btn'/></a>
                        <a href="#contact" className="slider-btn slider-diff">contactez nous <TrendingFlat className='icons-btn'/></a>
                    </div>
                </div>
                <div className="slider-right" data-aos="fade-up-left">
                    <img src={fondLeft} alt="" className="slider-img" />
                    <img src={fondCopie} alt="" className="slider-img" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Slider