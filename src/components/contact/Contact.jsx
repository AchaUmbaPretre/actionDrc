import { LocationOn } from '@mui/icons-material'
import './contact.scss'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <div className="contact">
            <div className="contact-wrapper">
                <div className="client-cont-title">
                    <h1 className="client-sous-title">Contact</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>

                <div className="contact-container">
                    <div className="contact-rows">
                        <div className="contact-left">
                            <div className="contact-left-rows">
                                <div className="contact-row">
                                    <div className="contact-row-icon">
                                        <LocationOn className='contact-icon'/>
                                    </div>
                                    <div className="contact-row-text">
                                        <span className="contact-txt">25 avenue de l'OUA Quartier GB Commune de Ngaliema</span>
                                    </div>
                                </div>

                                <div className="contact-row">
                                    <div className="contact-row-icon">
                                        <LocationOn className='contact-icon'/>
                                    </div>
                                    <div className="contact-row-text">
                                        <span className="contact-txt"><Link to='https://info@actionsdrc.Com' className="contact-txt" >info@actionsdrc.Com</Link></span>
                                    </div>
                                </div>

                                <div className="contact-row">
                                    <div className="contact-row-icon">
                                        <LocationOn className='contact-icon'/>
                                    </div>
                                    <div className="contact-row-text">
                                        <span className="contact-txt">25 avenue de l'OUA Quartier GB Commune de Ngaliema</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-left-bottom">

                            </div>
                        </div>

                        <div className="contact-right">
                            <form action="">
                                <div className="form-control">
                                    <input type="text" className="input-controle" placeholder='Entrez votre nom...' />
                                    <input type="text" className="input-controle" placeholder='Entrez votre email...' />
                                </div>
                                <div className="form-control">
                                    <input type="text" className="input-controle" placeholder='Objectif...' />
                                </div>
                                <textarea name="" id="" rows="10"></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact