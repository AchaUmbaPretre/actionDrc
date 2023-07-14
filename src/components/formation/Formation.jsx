import './formation.scss'
import formation from './../../img/formation.png'
const Formation = () => {
  return (
    <>
        <div className="formation">
            <div className="formation-wrapper">
                <div className="formation-left">
                    <div className="client-cont-title">
                        <h1 className="client-title">Formation</h1>
                        <h1 className="client-sous-title">moteur de développement</h1>
                        <p className="apropos-barre"><span className="apropos-moov"></span></p>
                    </div>
                    <div className="formation-text">
                        <p className="formation-desc">
                        Nous croyons que la formation est la clé pour fournir des services de qualité
                        supérieure. C'est pourquoi nous offrons des formations de mise à niveau pour
                        notre personnel, afin de garantir que nous délivrons les meilleurs standards
                        avec les meilleures pratiques du moment.
                        </p>
                    </div>
                </div>

                <div className="formation-right">
                    <img src={formation} alt="" className="formation-img" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Formation