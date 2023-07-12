import {GppGood} from '@mui/icons-material'
import douane1 from './../../img/douane1.jpg'
import douane2 from './../../img/douane2.jpg'
import douane3 from './../../img/douane3.jpg'
import './apropos.scss'

const Apropos = () => {
  return (
    <>
        <div className="apropos">
            <div className="apropos-wrapper">
                <div className="apropos-left">
                  <div className="apropos-cont-title">
                    <h1 className="apropos-h1">A PROPOS DE NOUS</h1>
                    <h1 className="apropos-sous-title">Nous sommes une entreprise de droit congolais</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                  </div>
                  <p className="apropos-desc">Nous sommes une entreprise de droit congolais, Agence en Douane et de Placement
                    de Personnel créée en 2014. Notre modèle d’affaires met un accent sur la loyauté, l'intégrité, le professionnalisme
                    et l'impact social. Nous sommes convaincus que notre succès repose sur la satisfaction de nos clients, mais également
                    sur notre capacité à avoir un impact positif sur la communauté. Nous sommes confiants d’une part en tant qu’agence en
                    douane de premier plan, fort de notre expertise dans le domaine de la logistique et douanier, du niveau de service de
                    qualité supérieur offert à nos clients grâce notamment à des solutions uniques et personnalisables au maximum à notre
                    clientèle hétéroclite.

                  </p>
                  <div className="apropos-rows">
                    <div className="apropos-row">
                      <GppGood className='apropos-icon'/>
                      <h4 className="apropos-h4">Integrité</h4>
                    </div>
                    <div className="apropos-row">
                      <GppGood className='apropos-icon'/>
                      <h4 className="apropos-h4">Serviabilité</h4>
                    </div>
                  </div>
                </div>
                <div className="apropos-right">
                  <div className="apropos-right-left">
                    <img src={douane2} alt="" className="apropos-right-img" />
                  </div>
                  <div className="apropos-right-rows">
                    <div className="apropos-right-top">
                      <img src={douane1} alt="" className="apropos-img1" />
                    </div>
                      <div className="apropos-right-bottom">
                        <img src={douane3} alt="" className="apropos-img1" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Apropos