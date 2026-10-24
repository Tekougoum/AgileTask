import { useState } from 'react'
import Bouton from './Bouton'
import './Navbar.css'
const liens = [
    { chemin: '/', libelle: 'Accueil' },
    { chemin: '/#fonctionnalites', libelle: 'Fonctionnalités' },
    { chemin: '/#fonctionnement', libelle: 'Fonctionnement' },
]
function Navbar() {
    const [ouvert, setOuvert] = useState(false)
    const fermer = () => setOuvert(false)
    return (
        <header className="header">
            <div className="conteneur header-barre">
                <a href="/" className="logo">
                    <span className="logo-icone">AT</span>
                    AgileTask
                </a>
                <button
                    className="burger"
                    aria-expanded={ouvert}
                    onClick={() => setOuvert(!ouvert)}
                >
                    {ouvert ? 'Fermer' : 'Menu'}
                </button>
                <nav className={`menu ${ouvert ? 'menu-ouvert' : ''}`}>
                    <div className="menu-liens">
                        {liens.map((lien) => (
                            <a key={lien.chemin} href={lien.chemin} onClick={fermer}>
                                {lien.libelle}
                            </a>
                        ))}
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
