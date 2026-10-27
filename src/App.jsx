

// import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
// import Home from './pages/Home'
// import PageVide from './pages/PageVide'
// function App() {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path='/login' element={<PageVide titre="Connexion" />} />
//         <Route path='/register' element={<PageVide titre="Inscription" />} />
//         <Route path="/fonctionnement" element={<PageVide titre="Fonctionnent" />} />
//         <Route path="/fonctionnalites" element={<PageVide titre="Fonctionnalites" />} />
//         <Route path="*" element={<PageVide titre="Page introuvable" />} />
        
//       </Route>
//     </Routes>
//   )
// }
// export default App

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PageVide from './pages/PageVide'
import TestFormulaire from './pages/TestFormulaire'
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestFormulaire />} />
        <Route path="/login" element={<PageVide titre="Connexion" />} />
        <Route path="/register" element={<PageVide titre="Inscription" />} />
        <Route path="*" element={<PageVide titre="Page introuvable" />} />
      </Route>
    </Routes>
  )
}
export default App