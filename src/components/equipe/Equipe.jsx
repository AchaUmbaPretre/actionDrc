import './equipe.scss'
import nana from '../../img/nana_manda.PNG'
import faustin from '../../img/faustin_bongali.PNG'
import nesto from '../../img/nesto_makweya.PNG'
import maxim from '../../img/maxim_nguz.PNG'
import patrick from '../../img/patrick.PNG'
import jeremi from '../../img/jeremi_wayway.PNG'
import { FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

const Equipe = () => {
  return (
    <>
        <div className="equipe" id="equipe">
            <div className="equipe-wrapper">
                <div className="client-cont-title">
                    <h1 className="client-sous-title">NOTRE EQUIPE</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>

                <div className="equipe-container">
                    <div className="equipe-rows">
                        <div className="equipe-row" data-aos="zoom-in-up">
                            <div className="equipe-top">
                                <img src={nana} alt="" className="equipe-img" />
                            </div>
                            <div className="equipe-bottom">
                                <div className="equipe-bottom-rows">
                                    <h2 className="equipe-name">Nana MANDA</h2>
                                    <h3 className="equipe-h3">General Manager</h3>
                                    <div className="equipe-rx">
                                        <div className="equipe-rows-rx">
                                            <FacebookOutlined className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Twitter className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <LinkedIn className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Instagram className='equipe-icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="equipe-row" data-aos="zoom-in-up">
                            <div className="equipe-top">
                                <img src={faustin} alt="" className="equipe-img" />
                            </div>
                            <div className="equipe-bottom">
                                <div className="equipe-bottom-rows">
                                    <h2 className="equipe-name">Faustin BONGALI</h2>
                                    <h3 className="equipe-h3">DAF</h3>
                                    <div className="equipe-rx">
                                        <div className="equipe-rows-rx">
                                            <FacebookOutlined className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Twitter className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <LinkedIn className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Instagram className='equipe-icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="equipe-row" data-aos="zoom-in-up">
                            <div className="equipe-top">
                                <img src={nesto} alt="" className="equipe-img" />
                            </div>
                            <div className="equipe-bottom">
                                <div className="equipe-bottom-rows">
                                    <h2 className="equipe-name">Nestor MAKWELA</h2>
                                    <h3 className="equipe-h3">Chef d'Agence Kinshasa</h3>
                                    <div className="equipe-rx">
                                        <div className="equipe-rows-rx">
                                            <FacebookOutlined className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Twitter className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <LinkedIn className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Instagram className='equipe-icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="equipe-row" data-aos="zoom-in-up">
                            <div className="equipe-top">
                                <img src={maxim} alt="" className="equipe-img" />
                            </div>
                            <div className="equipe-bottom">
                                <div className="equipe-bottom-rows">
                                    <h2 className="equipe-name">Maxim NGUZ E.</h2>
                                    <h3 className="equipe-h3">Chef d'Agence Katanga</h3>
                                    <div className="equipe-rx">
                                        <div className="equipe-rows-rx">
                                            <FacebookOutlined className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Twitter className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <LinkedIn className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Instagram className='equipe-icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="equipe-row" data-aos="zoom-in-up">
                            <div className="equipe-top">
                                <img src={patrick} alt="" className="equipe-img" />
                            </div>
                            <div className="equipe-bottom">
                                <div className="equipe-bottom-rows">
                                    <h2 className="equipe-name">Patrick MONGA M.</h2>
                                    <h3 className="equipe-h3">Financial Manager Katanga</h3>
                                    <div className="equipe-rx">
                                        <div className="equipe-rows-rx">
                                            <FacebookOutlined className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Twitter className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <LinkedIn className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Instagram className='equipe-icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="equipe-row" data-aos="zoom-in-up">
                            <div className="equipe-top">
                                <img src={jeremi} alt="" className="equipe-img" />
                            </div>
                            <div className="equipe-bottom">
                                <div className="equipe-bottom-rows">
                                    <h2 className="equipe-name">Jeremie WAYWAY K.</h2>
                                    <h3 className="equipe-h3">Supervisor</h3>
                                    <div className="equipe-rx">
                                        <div className="equipe-rows-rx">
                                            <FacebookOutlined className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Twitter className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <LinkedIn className='equipe-icon'/>
                                        </div>
                                        <div className="equipe-rows-rx">
                                            <Instagram className='equipe-icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Equipe