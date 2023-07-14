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
                                <h2 class="question-h2">Qu'est-ce qu'une agence en douane et en quoi consiste votre activité ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                Une agence en douane est une entreprise spécialisée dans les formalités douanières et les transactions
                                internationales. Chez Actions SARL, nous aidons nos clients à naviguer dans le système douanier en leur
                                fournissant des conseils et des services adaptés à leurs besoins.
                                </p>
                            </div>
                        </div>

                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Quels sont les avantages de faire appel à une agence en douane pour mes transactions internationales ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                Les transactions internationales impliquent souvent des formalités douanières complexes et des réglementations strictes.
                                Faire appel à une agence en douane telle que Actions SARL peut vous aider à réduire le risque de retards, d'erreurs ou
                                de coûts supplémentaires, en vous permettant de vous concentrer sur votre activité principale.
                                </p>
                            </div>
                        </div>

                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Quels types de services offrez-vous en matière de douane ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                Chez Actions SARL, nous offrons une gamme complète de services douaniers, y compris la classification des marchandises,
                                la gestion des documents de dédouanement, la gestion des formalités douanières, la gestion des taxes et des droits
                                d'importation, et la gestion des réglementations douanières. Pour ces derniers, nous avons une expertise avérées dans
                                la résolution des contentieux liés à la douane
                                </p>
                            </div>
                        </div>

                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Comment pouvez-vous aider les petites entreprises qui n'ont pas d'expérience en matière de transactions internationales ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                Chez Actions SARL, nous travaillons avec des entreprises de toutes tailles, y compris des petites entreprises qui n'ont pas
                                d'expérience en matière de transactions internationales. Nous sommes là pour vous guider à chaque étape du processus, en
                                fournissant des conseils et des services adaptés à vos besoins spécifiques
                                </p>
                            </div>
                        </div>

                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Qu'est-ce qu'une agence de placement de personnel et en quoi consiste votre activité,</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                Une agence de placement de personnel est une entreprise qui se spécialise dans le recrutement et le placement de personnel
                                pour les entreprises et les organisations. Chez Actions SARL, nous aidons nos clients à trouver les meilleurs talents en
                                leur fournissant des services de recrutement, de sélection, de formation et de placement de personnel adaptés à leurs besoins.
                                </p>
                            </div>
                        </div>

                        <div class="question-row">
                            <div class="visible-pannel">
                                <h2 class="question-h2">Comment pouvez-vous aider les petites entreprises qui n'ont pas d'expérience en matière de transactions internationales ?</h2>
                                <ExpandMoreIcon className='icons-plus'/>
                            </div>
                            <div class="toggle-pannel">
                                <p class="question-desc">
                                Chez Actions SARL, nous travaillons avec des entreprises de toutes tailles, y compris des petites entreprises qui n'ont pas
                                d'expérience en matière de transactions internationales. Nous sommes là pour vous guider à chaque étape du processus, en
                                fournissant des conseils et des services adaptés à vos besoins spécifiques
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