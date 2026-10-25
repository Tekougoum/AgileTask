

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Bouton from './Bouton'
function Navbar() {
    const [ouvert, setOuvert] = useState(false)
    const fermer = () => setOuvert(false)
    return (
        <header className="header">

            <div className="conteneur header-barre">
                <Link to="/" onClick={fermer} className="logo">
                    <span className="logo-icone">&lt;/&gt;</span>
                    AgileTask
                </Link>
                <button
                    className="burger"
                    aria-expanded={ouvert}
                    onClick={() => setOuvert(!ouvert)}
                >
                    {ouvert ? 'Fermer' : 'Menu'}
                </button>
                <nav className={`menu ${ouvert ? 'menu-ouvert' : ''}`}>
                    <div className="menu-liens">
                        <NavLink to="/" end onClick={fermer}>
                            Accueil
                        </NavLink>
                        <a href="/fonctionnalites" onClick={fermer}>
                            Fonctionnalités
                        </a>
                        <a href="/fonctionnement" onClick={fermer}>
                            Fonctionnement
                        </a>
                    </div>
                    <div className="menu-actions">
                        <Bouton lien="/login" variante="secondaire" onClick={fermer}>
                            Connexion
                        </Bouton>
                        <Bouton lien="/register" onClick={fermer}>
                            S'inscrire
                        </Bouton>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Navbar