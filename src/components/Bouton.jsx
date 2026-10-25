import { Link } from 'react-router-dom'
function Bouton({ children, lien = '/', variante = 'principal', taille = 'md', onClick }) {
    return (
        <Link to={lien} onClick={onClick} className={`btn btn-${variante} btn-${taille}`}>
            {children}
        </Link>
    )
}
export default Bouton