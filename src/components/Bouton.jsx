import { Link } from 'react-router-dom'
function Bouton({
  children,
  lien,
  type = 'button',
  variante = 'principal',
  taille = 'md',
  pleineLargeur = false,
  onClick,
}) {
  const classes = `btn btn-${variante} btn-${taille} ${pleineLargeur ? 'btn-bloc' : ''}`
  // Avec une prop "lien" : un lien de navigation. Sans : un vrai bouton.
  if (lien) {
    return (
      <Link to={lien} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
export default Bouton
