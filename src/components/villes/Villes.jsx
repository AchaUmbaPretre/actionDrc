import './villes.scss'
import localisation from '../../img/localisation.png'

const Villes = () => {
  return (
    <>
        <div className="villes">
            <div className="villes-wrapper">
                <div className="client-cont-title">
                    <h1 className="client-sous-title">Où sommes-nous ?</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>

                <div className="villes-container">
                    <div className="villes-rows">
                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Kinshasa</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Kongo central</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Lubumbashi</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Kolwezi</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Kasumbalesa</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Sakania</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Kisangani</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Mbuji-Mayi</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Kananga</h2>
                        </div>

                        <div className="villes-row" data-aos="zoom-in-up">
                            <div className="villes-image">
                                <img src={localisation} alt="" className="villes-img" />
                            </div>
                            <h2>Nord et Sud-kivu</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Villes