import './clients.scss'
import CHINA from './../../img/CHINA.png'
import CNSS from './../../img/CNSS.png'
import GECAMINE from './../../img/GECAMINE.png'
import RVA from './../../img/rva.png'
import snel from './../../img/snel.png'
import jmc from './../../img/jmc.png'

const Clients = () => {
  return (
    <>
        <div className="client">
            <div className="client-wrapper">
                <div className="client-cont-title">
                    <h1 className="client-title">NOS CLIENTS</h1>
                    <h1 className="client-sous-title">Ils nous ont fait confiance</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="client-container">
                    <div className="client-row" data-aos="fade-up">
                        <img src={CHINA} alt="" className="client-img" />
                    </div>
                    <div className="client-row" data-aos="fade-up">
                        <img src={CNSS} alt="" className="client-img" />
                    </div>
                    <div className="client-row" data-aos="fade-up">
                        <img src={GECAMINE} alt="" className="client-img" />
                    </div>
                    <div className="client-row" data-aos="fade-up">
                        <img src={RVA} alt="" className="client-img" />     
                    </div>
                    <div className="client-row" data-aos="fade-up">
                        <img src={snel} alt="" className="client-img" />
                    </div>
                    <div className="client-row" data-aos="fade-up">
                        <img src={jmc} alt="" className="client-img" />   
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Clients