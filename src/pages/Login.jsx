import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Bouton from '../components/Bouton'
import ChampFormulaire from '../components/ChampFormulaire'
import TerminalConnexion from '../components/TerminalConnexion'
import { connecter, utilisateurCourant } from '../services/authMock'
import { validerConnexion } from '../utils/validation'
function Login() {
  const navigate = useNavigate()
 const location = useLocation()
  const [formulaire, setFormulaire] = useState({
    email: '',
    motDePasse: '',
    memoriser: false,
  })
  const [erreur, setErreur] = useState('')
  const modifier = (e) => {
    const { name, type, value, checked } = e.target
    setFormulaire({ ...formulaire, [name]: type === 'checkbox' ? checked : value })
    setErreur('')
  }
  const soumettre = (e) => {
    e.preventDefault()
    const messageValidation = validerConnexion(formulaire)
    if (messageValidation) {
      setErreur(messageValidation)
      return
    }
    const resultat = connecter(formulaire)
    if (!resultat.ok) {
      setErreur(resultat.erreur)
      return
    }
    navigate('/dashboard')
  }
  // Déjà connecté ? On n'affiche pas la page de connexion (comme sur la maquette)
  if (utilisateurCourant()) {
    return <Navigate to="/dashboard" replace />
  }
 const message = location.state?.message
  return (
    <section className="auth">
      <div className="auth-gauche">
        <h2>
          Rejoignez votre équip sur <span className="accent"> AgileTask.</span>
        </h2>
        <p>
          Consultez vos tickets, mettez à jour leur statut et échangez avec vos
          collègues.
        </p>
        <TerminalConnexion />
      </div>
      <div className="auth-droite">
        <div className="auth-formulaire">
          <h1>Connexion</h1>
          <p className="auth-sous-titre">Accédez à votre espace personnel.</p>
          <form onSubmit={soumettre} noValidate>
            <div className="auth-champs">
              {message && (
                <div className="encart encart-succes" role="status">
                  {message}
                </div>
              )}
              {erreur && (
                <div className="encart encart-erreur" role="alert">
                  {erreur}
                </div>
              )}
              <ChampFormulaire
                label="Adresse e-mail"
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                autoComplete="email"
                valeur={formulaire.email}
                onChange={modifier}
              />
              <ChampFormulaire
                label="Mot de passe"
  name="motDePasse"
                type="password"
                placeholder="Votre mot de passe"
                autoComplete="current-password"
                valeur={formulaire.motDePasse}
                onChange={modifier}
              />
              <label className="case">
                <input
                  type="checkbox"
                  name="memoriser"
                  checked={formulaire.memoriser}
                  onChange={modifier}
                />
                Se souvenir de moi
              </label>
              <Bouton type="submit" taille="lg" pleineLargeur>
                Se connecter
              </Bouton>
            </div>
          </form>
          <p className="auth-lien auth-pied">
            Pas encore de compte ? <Link to="/register">S'inscrire</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Login
