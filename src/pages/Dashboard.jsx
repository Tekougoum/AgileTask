import { Navigate, useNavigate } from 'react-router-dom'
import Bouton from '../components/Bouton'
import { deconnecter, utilisateurCourant } from '../services/authMock'
function Dashboard() {
  const navigate = useNavigate()
  const utilisateur = utilisateurCourant()
  // Pas connecté ? Retour à la page de connexion
  if (!utilisateur) {
    return <Navigate to="/login" replace />
  }
  const seDeconnecter = () => {
    deconnecter()
    navigate('/')
  }
  return (
    <section className="conteneur page-vide">
      <h1>Bonjour, {utilisateur.nom}</h1>
      <p>Le tableau de bord (maquette 4) sera construit en semaine 3.</p>
      <p>
        Projets : {utilisateur.projets.length} | Invitations : {utilisateur.invitations.length}
      </p>
      <div style={{ marginTop: '1.5rem' }}>
        <Bouton variante="secondaire" onClick={seDeconnecter}>
          Déconnexion
        </Bouton>
      </div>
    </section>
  )
}
export default Dashboard
