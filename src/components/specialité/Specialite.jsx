import './specialite.scss'
import cuisinier from './../../img/cuisinier.jpg'
import nounou from './../../img/nounou-domicile.webp'
import chauffeur from './../../img/chauffeur.webp'
import gouvernante from './../../img/gouvernante.jpg'
import majordome from './../../img/majordome.jpg'
import pediatrie from './../../img/pediatrie.jpg'
import femme from './../../img/femme.jpeg'
import lavadier from './../../img/lavadier.jpg'

const Specialite = () => {
  return (
    <>
        <div className="specialite">
          <div className="specialite-wrapper">
            <div className="client-cont-title">
              <h1 className="client-sous-title">NOS SPECIALITES</h1>
              <p className="apropos-barre"><span className="apropos-moov"></span></p>
            </div>

            <div className="specialite-container">
              <div className="specialite-row" data-aos="zoom-in-up">
                <img src={cuisinier} alt="" className="specialite-img" />
                <p className="specialite-desc">Cuisinier</p>
              </div>

              <div className="specialite-row" data-aos="zoom-in-up">
                <img src={nounou} alt="" className="specialite-img" />
                <p className="specialite-desc">Nounou à domicile</p>
              </div>

              <div className="specialite-row">
                <img src={chauffeur} alt="" className="specialite-img" data-aos="zoom-in-up" />
                <p className="specialite-desc">Chauffeur</p>
              </div>

              <div className="specialite-row" data-aos="zoom-in-up">
                <img src={gouvernante} alt="" className="specialite-img" />
                <p className="specialite-desc">Gouvernante</p>
              </div>

              <div className="specialite-row" data-aos="zoom-in-up">
                <img src={lavadier} alt="" className="specialite-img" />
                <p className="specialite-desc">Lavadier</p>
              </div>

              <div className="specialite-row" data-aos="zoom-in-up">
                <img src={majordome} alt="" className="specialite-img" />
                <p className="specialite-desc">Majordome</p>
              </div>

              <div className="specialite-row" data-aos="zoom-in-up">
                <img src={femme} alt="" className="specialite-img" />
                <p className="specialite-desc">Femme de ménage</p>
              </div>
              <div className="specialite-row" data-aos="zoom-in-up">
                <img src={pediatrie} alt="" className="specialite-img" />
                <p className="specialite-desc">Puéricultrice</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Specialite