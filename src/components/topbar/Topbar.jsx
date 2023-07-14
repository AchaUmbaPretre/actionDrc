import { Facebook, Instagram, LinkedIn, LocationOn, Mail, Phone, Twitter, YouTube } from '@mui/icons-material'
import './topbar.scss'

const Topbar = () => {
  return (
    <>
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <div className="topbar-left-icons">
                        <LocationOn className='topbar-icons'/>
                        <span className="topbar-adresse">25 avenue de l'OUA Quartier GB Commune de Ngaliema</span>
                    </div>
                    <div className="topbar-left-icons topNum">
                        <Phone className='topbar-icons'/>
                        <span className="topbar-adresse">+243 819 444 440</span>
                    </div>
                    <div className="topbar-left-icons">
                        <Mail className='topbar-icons'/>
                        <span className="topbar-adresse">Info@actionsdrc.Com</span>
                    </div>
                </div>
                <div className="topbar-right">
                    <Twitter className='topbar-rsx'/>
                    <Facebook className='topbar-rsx'/>
                    <LinkedIn className='topbar-rsx'/>
                    <Instagram className='topbar-rsx'/>
                    <YouTube className='topbar-rsx'/>
                </div>
            </div>
        </div>
    </>
  )
}
export default Topbar