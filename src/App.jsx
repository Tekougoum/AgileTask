// function App() {
//   const nom = 'AgileTask'
//   return (
//      <div className="conteneur">      
//       <h1>{nom}</h1>      
//       <p>Gestion de projets et de tickets pour développeurs.</p>    
//      </div>)
// }

// export default App

// import Bouton from './components/Bouton'
// import Carte from './components/Carte'
// function App() {
//   return (
//     <div className="conteneur">
//       <h1>Test des composants</h1>
//       <div style={{ display: 'flex', gap: '0.75rem', margin: '1.5rem 0' }}>
//         <Bouton lien="/register">Créer un compte</Bouton>
//         <Bouton lien="/login" variante="secondaire">Se connecter</Bouton>
//         <Bouton taille="lg">Grand bouton</Bouton>
//       </div>
//       <Carte icone="</>" couleur="bleu" titre="Entraide" texte="Texte de test." />
//     </div>
//   )
// }
// export default App

import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <main className="conteneur">
        <p>Le contenu de la page viendra ici.</p>
      </main>
      <Footer />
    </>
  )
}
export default App