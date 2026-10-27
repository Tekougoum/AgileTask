const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validerInscription({ nom, email, motDePasse, confirmation }) {
  const erreurs = {}
  if (nom.trim().length < 2) {
    erreurs.nom = 'Le nom complet est obligatoire (2 caractères minimum).'
  }
  if (!REGEX_EMAIL.test(email.trim())) {
    erreurs.email = "L'adresse e-mail n'est pas valide."
  }
  if (motDePasse.length < 8) {
    erreurs.motDePasse = 'Le mot de passe doit contenir au moins 8 caractères.'
  }
  if (confirmation !== motDePasse) {
    erreurs.confirmation = 'Les deux mots de passe ne sont pas identiques.'
  }
  return erreurs
}

export function validerConnexion({ email, motDePasse }) {
  if (!email.trim() || !motDePasse) {
    return 'Veuillez saisir votre adresse e-mail et votre mot de passe.'
  }
  return ''
}

export function calculerForce(motDePasse) {
  let points = 0
  if (motDePasse.length >= 8) points += 1
  if (/[a-z]/.test(motDePasse) && /[A-Z]/.test(motDePasse)) points += 1
  if (/\d/.test(motDePasse)) points += 1
  if (/[^A-Za-z0-9]/.test(motDePasse)) points += 1
  return points
}
// Index 1 à 4 (l'index 0 n'est pas utilisé)
export const LIBELLES_FORCE = ['', 'faible', 'moyenne', 'bonne', 'forte']
