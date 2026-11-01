import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Bouton from '../components/Bouton'
import ChampFormulaire from '../components/ChampFormulaire'
import ForceMotDePasse from '../components/ForceMotDePasse'
import TerminalCompte from '../components/TerminalCompte'
import { inscrire } from '../services/authMock'
import { validerInscription } from '../utils/validation'
import '../style/register.css'
function Register() {
  const navigate = useNavigate()
  const [formulaire, setFormulaire] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    confirmation: '',
  })
  const [erreurs, setErreurs] = useState({})
  const modifier = (e) => {
    const { name, value } = e.target
    setFormulaire({ ...formulaire, [name]: value })
    // L'utilisateur corrige ce champ : on efface son message d'erreur
    setErreurs({ ...erreurs, [name]: undefined })
  }
  const soumettre = (e) => {
    e.preventDefault()
    const nouvellesErreurs = validerInscription(formulaire)
    setErreurs(nouvellesErreurs)
    if (Object.keys(nouvellesErreurs).length > 0) return
    const resultat = inscrire(formulaire)
    if (!resultat.ok) {
      setErreurs({ email: resultat.erreur })
      return
    }
    navigate('/login', {
      state: { message: 'Compte créé avec succès. Vous pouvez vous connecter.' },
    })
  }
  return (
    <section className="auth">
      <div className="auth-gauche">
        <h2>
          Rejoignez votre équipe sur <span className="accent">AgileTask.</span>
        </h2>
        <p>
          Consultez vos tickets, mettez à jour leur statut et échangez avec vos
          collègues.
        </p>
        <TerminalCompte />
      </div>
      <div className="auth-droite">
        <div className="auth-formulaire">
          <h1>Créer un compte</h1>
          <p className="auth-sous-titre">
            Renseignez vos informations pour accéder à DevTicket.
          </p>
          <form onSubmit={soumettre} noValidate>
            <div className="auth-champs">
              <ChampFormulaire
                label="Nom complet"
                name="nom"
                placeholder="Ex. : Jean Dupont"
                autoComplete="name"
                valeur={formulaire.nom}
                onChange={modifier}
                erreur={erreurs.nom}
              />
              <ChampFormulaire
                label="Adresse e-mail"
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                autoComplete="email"
                valeur={formulaire.email}
                onChange={modifier}
                erreur={erreurs.email}
              />
              <div className="groupe-mdp">
                <ChampFormulaire
                  label="Mot de passe"
                  name="motDePasse"
                  type="password"
                  placeholder="8 caractères minimum"
                  autoComplete="new-password"
                  valeur={formulaire.motDePasse}
                  onChange={modifier}
                  erreur={erreurs.motDePasse}
                />
                <ForceMotDePasse motDePasse={formulaire.motDePasse} />
              </div>
              <ChampFormulaire
                label="Confirmation du mot de passe"
                name="confirmation"
                type="password"
                placeholder="Saisissez à nouveau le mot de passe"
                autoComplete="new-password"
                valeur={formulaire.confirmation}
                onChange={modifier}
                erreur={erreurs.confirmation}
              />
              <div className="encart encart-info">
                <span className="encart-info-icone">i</span>
                <p>
                  Un seul type de compte : vous êtes chef des projets que vous créez et
                  membre de ceux où l'on vous invite.
                </p>
              </div>
              <Bouton type="submit" taille="lg" pleineLargeur>
                S'inscrire
              </Bouton>
            </div>
          </form>
          <p className="auth-lien">
            Déjà un compte ? <Link to="/login">Se connecter</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Register
