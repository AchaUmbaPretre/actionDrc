import './specialite.scss'
import cuisinier from './../../img/cuisinier.jpg'

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
              <div className="specialite-row">
                <img src={cuisinier} alt="" className="specialite-img" />
                <p className="specialite-desc">Cuisinier</p>
              </div>

              <div className="specialite-row">
                <img src={cuisinier} alt="" className="specialite-img" />
                <p className="specialite-desc">Cuisinier</p>
              </div>

              <div className="specialite-row">
                <img src={cuisinier} alt="" className="specialite-img" />
                <p className="specialite-desc">Cuisinier</p>
              </div>

              <div className="specialite-row">
                <img src={cuisinier} alt="" className="specialite-img" />
                <p className="specialite-desc">Cuisinier</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Specialite