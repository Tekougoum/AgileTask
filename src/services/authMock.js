const CLE_UTILISATEURS = 'devticket_utilisateurs'
const CLE_SESSION = 'devticket_session'
function lireUtilisateurs() {
  try {
    return JSON.parse(localStorage.getItem(CLE_UTILISATEURS)) ?? []
  } catch {
    return []
  }
}
function sauverUtilisateurs(utilisateurs) {
  localStorage.setItem(CLE_UTILISATEURS, JSON.stringify(utilisateurs))
}
// Ce que l'interface a le droit de voir : jamais le mot de passe
function versPublic(u) {
  return {
    id: u.id,
    nom: u.nom,
    email: u.email,
    projets: u.projets,
    invitations: u.invitations,
    tickets: u.tickets,
  }
}
export function inscrire({ nom, email, motDePasse }) {
  const utilisateurs = lireUtilisateurs()
  const emailNormalise = email.trim().toLowerCase()
  if (utilisateurs.some((u) => u.email === emailNormalise)) {
    return { ok: false, erreur: 'Un compte existe déjà avec cette adresse e-mail.' }
  }
  const nouveau = {
    id: crypto.randomUUID(),
    nom: nom.trim(),
    email: emailNormalise,
    motDePasse,
    projets: [],
 invitations: [],
    tickets: [],
  }
  sauverUtilisateurs([...utilisateurs, nouveau])
  return { ok: true }
}
export function connecter({ email, motDePasse, memoriser }) {
  const emailNormalise = email.trim().toLowerCase()
  const utilisateur = lireUtilisateurs().find(
    (u) => u.email === emailNormalise && u.motDePasse === motDePasse,
  )
  // Même message si l'e-mail est inconnu OU si le mot de passe est faux
  if (!utilisateur) {
    return { ok: false, erreur: 'Adresse e-mail ou mot de passe incorrect.' }
  }
  deconnecter()
  const stockage = memoriser ? localStorage : sessionStorage
  stockage.setItem(CLE_SESSION, utilisateur.id)
  return { ok: true }
}
export function utilisateurCourant() {
  const id = sessionStorage.getItem(CLE_SESSION) ?? localStorage.getItem(CLE_SESSION)
  if (!id) return null
  const utilisateur = lireUtilisateurs().find((u) => u.id === id)
  return utilisateur ? versPublic(utilisateur) : null
}
export function deconnecter() {
  sessionStorage.removeItem(CLE_SESSION)
  localStorage.removeItem(CLE_SESSION)
}
