import { LIBELLES_FORCE, calculerForce } from '../utils/validation'
import '../style/forceMDP.css'
function ForceMotDePasse({ motDePasse }) {

    const niveau = motDePasse ? Math.max(calculerForce(motDePasse), 1) : 0
    return (
        <div className={`force-niveau-${niveau}`}>
            <div className="force-barres">
                {[1, 2, 3, 4].map((numero) => (
                    <span
                        key={numero}
                        className={`force-barre ${numero <= niveau ? 'force-barre-active' : ''}`}
                    />
                ))}
            </div>
            {niveau > 0 && <p className="force-texte">Force : {LIBELLES_FORCE[niveau]}</p>}
        </div>
    )
}
export default ForceMotDePasse