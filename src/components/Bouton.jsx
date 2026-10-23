function Bouton({ children, lien = '/', variante = 'principal', taille = 'md', onClick }) {
    return (
        <a href={lien} onClick={onClick} className={`btn btn-${variante} btn-${taille}`}>
            {children}
        </a>
    )
}
export default Bouton