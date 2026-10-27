import { useState } from 'react'
import ChampFormulaire from '../components/ChampFormulaire'
import { calculerForce } from '../utils/validation'
function TestFormulaire() {
  const [motDePasse, setMotDePasse] = useState('')
  const tropCourt = motDePasse.length > 0 && motDePasse.length < 8
  return (
    <section className="conteneur page-vide">
 <h1>Test des champs</h1>
      <div style={{ maxWidth: '24rem' }}>
        <ChampFormulaire
          label="Mot de passe"
          name="motDePasse"
          type="password"
          placeholder="Tape un mot de passe"
          valeur={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          erreur={tropCourt ? 'Trop court (8 caractères minimum).' : ''}
        />
        <p>Points de force : {calculerForce(motDePasse)} / 4</p>
      </div>
    </section>
  )
}
export default TestFormulaire