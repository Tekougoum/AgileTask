import Bouton from '../components/Bouton'
import Carte from '../components/Carte'
import TerminalTicket from '../components/TerminalTicket'
import '../style/Home.css'
const fonctionnalites = [
  {
    icone: '</>',
    couleur: 'bleu',
    titre: 'Tickets et attribution',
    texte:
  'Le chef de projet crée les tickets, fixe priorités et dates limites, ' +
      'puis les attribue aux développeurs.',
  },
  {
    icone: '//',
    couleur: 'violet',
    titre: 'Collaboration',
    texte:
      'Chaque ticket dispose de son espace de discussion pour poser des ' +
      'questions et signaler les difficultés.',
  },
  {
    icone: '[ ]',
    couleur: 'vert',
    titre: 'Suivi et historique',
    texte:
      'Tableau de bord, vue Kanban et historique structuré des modifications ' +
      "pour suivre l'avancement.",
  },
]
const etapes = [
  { numero: 1, titre: 'Inscription', texte: 'Créez votre compte développeur.' },
  { numero: 2, titre: 'Projet et équipe', texte: "Le chef de projet constitue l'équipe." },
  { numero: 3, titre: 'Tickets attribués', texte: 'Création progressive et attribution.' },
  { numero: 4, titre: 'Suivi en continu', texte: 'Statuts, commentaires, tableau de bord.' },
]
function Home() {
  return (
    <>
      {/* 1. Héros */}
      <section className="hero">
        <div className="conteneur hero-grille">
          <div>
            <span className="badge">
 Gestion de projets et de tickets pour développeurs
            </span>
            <h1>
              Qui fait quoi, où en est{' '}
              <span className="accent">chaque tâche.</span>
            </h1>
            <p className="hero-texte">
              AgileTask centralise les tickets, les discussions et l'historique du
              travail afin que chaque membre de l'équipe sache ce qui a été fait,
              ce qui est en cours et ce qui reste à réaliser.
            </p>
            <div className="hero-boutons">
              <Bouton lien="/register" taille="lg">
                Créer un compte
              </Bouton>
              <Bouton lien="/login" variante="secondaire" taille="lg">
                Se connecter
              </Bouton>
            </div>
          </div>
          <TerminalTicket />
        </div>
      </section>
      {/* 2. Fonctionnalités */}
      <section id="fonctionnalites" className="conteneur grille-cartes">
        {fonctionnalites.map((f) => (
          <Carte key={f.titre} {...f} />
        ))}
      </section>
      {/* 3. Comment ça marche */}
      <section id="fonctionnement" className="section conteneur">
        <h2>Comment ça marche</h2>
        <ol className="etapes">
          {etapes.map((e) => (
            <li key={e.numero} className="etape">
              <span className="etape-numero">{e.numero}</span>
              <div>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
export default Home