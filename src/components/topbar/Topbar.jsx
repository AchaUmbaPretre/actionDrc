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
                        <span className="topbar-adresse">6 tabora, Kinshasa gombe, Rdc</span>
                    </div>
                    <div className="topbar-left-icons topNum">
                        <Phone className='topbar-icons'/>
                        <span className="topbar-adresse">+243810836943</span>
                    </div>
                    <div className="topbar-left-icons">
                        <Mail className='topbar-icons'/>
                        <span className="topbar-adresse">hello@243technologies.com</span>
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