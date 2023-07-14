import './faq.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Faq = () => {
  return (
    <>
        <div className="faq">
            <div className="faq-wrapper">
                <div className="client-cont-title">
                    <h1 className="client-title">FAQ</h1>
                    <h1 className="client-sous-title">Questions fréquemment posées</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="faq-container">
                    <div className="faq-rows">
                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Quels sont des criteres d'admission à l'école Nyota ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                    Les critères d'admission à l'école Nyota varient selon le niveau scolaire. Les candidats
                                    sont évalués en fonction de leur aptitude scolaire, de leur comportement, de leur attitude
                                    envers l'apprentissage et de leur motivation.
                                </p>
                            </div>
                        </div>

                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Quels sont des criteres d'admission à l'école Nyota ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                    Les critères d'admission à l'école Nyota varient selon le niveau scolaire. Les candidats
                                    sont évalués en fonction de leur aptitude scolaire, de leur comportement, de leur attitude
                                    envers l'apprentissage et de leur motivation.
                                </p>
                            </div>
                        </div>

                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Quels sont des criteres d'admission à l'école Nyota ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                    Les critères d'admission à l'école Nyota varient selon le niveau scolaire. Les candidats
                                    sont évalués en fonction de leur aptitude scolaire, de leur comportement, de leur attitude
                                    envers l'apprentissage et de leur motivation.
                                </p>
                            </div>
                        </div>

                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Quels sont des criteres d'admission à l'école Nyota ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                    Les critères d'admission à l'école Nyota varient selon le niveau scolaire. Les candidats
                                    sont évalués en fonction de leur aptitude scolaire, de leur comportement, de leur attitude
                                    envers l'apprentissage et de leur motivation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq