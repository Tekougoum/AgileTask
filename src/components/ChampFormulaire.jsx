import { useId } from 'react'
import '../style/ChampFormulaire.css'
function ChampFormulaire({ label, valeur, onChange, erreur, ...autres }) {
    
    const id = useId()
    return (
        <div className="champ">
            <label htmlFor={id} className="champ-label">
                {label}
            </label>
            <input
                id={id}
                value={valeur}
                onChange={onChange}
                className={`champ-input ${erreur ? 'champ-input-erreur' : ''}`}
                aria-invalid={Boolean(erreur)}
                {...autres}
            />
            {erreur && <p className="champ-erreur">{erreur}</p>}
        </div>
    )
}
export default ChampFormulaire
