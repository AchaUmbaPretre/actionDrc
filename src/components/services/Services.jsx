import './services.scss'
import { Link } from 'react-router-dom'
import expo from "../../img/import-export.jpg"
import logistique from "../../img/logistique1.jpg"
import consulting from "../../img/consulting1.jpg"
import DRH from '../../img/DRH1.jpg'
import hydro from '../../img/hydro.jpg'

const Services = () => {
  return (
    <>
        <div className="services" id='services'>
            <div className="services-wrapper">
                <div className="client-cont-title">
                    <h1 className="client-title">NOS SERVICES</h1>
                    <h1 className="client-sous-title">Nous proposons 5 gammes de services pour répondre aux besoins de nos clients</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="services-container">
                    <div className="services-rows">
                        <div className="services-row" data-aos="zoom-in-up">
                            <div className="services-image">
                                <img src={expo} alt="" className="service-img" />
                            </div>
                            <div className="service-bottom">
                                <div className="service-rows-title">
                                    <h2 className="service-h2">IMPORT & EXPORT</h2>
                                </div>
                                <p className="service-desc">
                                    Nous organisons vos flux de marchandises avec sécurité, confiance et célérité et tenant compte de votre budget.
                                    En sa qualité de commissionnaire en douane agréée par la Direction Générale des Douanes et Accises (DGDA), Actions
                                    Sarl prend en charge toutes les opérations liées au pré-dédouanement, dédouanement et post-dédouanement.
                                </p>
                                <Link to="" className="service-btn">savoir plus</Link>
                            </div>
                        </div>

                        <div className="services-row" data-aos="zoom-in-up">
                            <div className="services-image">
                                <img src={logistique} alt="" className="service-img" />
                            </div>
                            <div className="service-bottom">
                                <div className="service-rows-title">
                                    <h2 className="service-h2">LOGISTIQUE</h2>
                                </div>
                                <p className="service-desc">
                                    Actions Sarl assure le suivi de la circulation de vos marchandises par les voies ferroviaires, aériennes ou maritimes.
                                </p>
                                <Link to="" className="service-btn">savoir plus</Link>
                            </div>
                        </div>

                        <div className="services-row" data-aos="zoom-in-up">
                            <div className="services-image">
                                <img src={DRH} alt="" className="service-img" />
                            </div>
                            <div className="service-bottom">
                                <div className="service-rows-title">
                                    <h2 className="service-h2">RESSOURCES HUMAINES</h2>
                                </div>
                                <p className="service-desc">
                                    Toujours dans le cadre d'offrir l'emploi à la population, Actions Sarl se lance dans le recrutement, la formation 
                                    et placement du personnel à un coût très abordable. L'Honnêteté, l'intégrité, la confidentialité et la disponibilité sont
                                    les valeurs cardinales qui font de Actions Sarl un partenaire de choix.
                                </p>
                                <Link to="" className="service-btn">savoir plus</Link>
                            </div>
                        </div>

                        <div className="services-row" data-aos="zoom-in-up">
                            <div className="services-image">
                                <img src={consulting} alt="" className="service-img" />
                            </div>
                            <div className="service-bottom">
                                <div className="service-rows-title">
                                    <h2 className="service-h2">CONSULTING</h2>
                                </div>
                                <p className="service-desc">
                                    Actions Sarl vous assisté à l'évaluation des projets, due diligence, ainsi qu'à la vérification des documents auprès des autorités consulaires,
                                    administratives et judiciaires.
                                </p>
                                <Link to="" className="service-btn">savoir plus</Link>
                            </div>
                        </div>

                        <div className="services-row" data-aos="zoom-in-up">
                            <div className="services-image">
                                <img src={hydro} alt="" className="service-img" />
                            </div>
                            <div className="service-bottom">
                                <div className="service-rows-title">
                                    <h2 className="service-h2">EXPERTISE EN HYDROCARBURE</h2>
                                </div>
                                <p className="service-desc">
                                    En tant qu'experte dans le secteur des hydrocarbures, Actions Sarl assure une prestation complète d'accompagnement de tout projet 
                                    d'échantillonnage, prenant en compte la procédure de conclusion du contrat de partage et de production (CPP) jusqu'à la maintenance 
                                    des gazoducs ou tous types d'installations industrielles de traitement ou de stockage des gaz ou hydrocarbure.
                                </p>
                                <Link to="" className="service-btn">savoir plus</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services