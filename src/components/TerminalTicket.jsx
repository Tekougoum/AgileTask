function Ligne({ cle, children }) {
  return (
    <p className="terminal-ligne">
      <span className="terminal-cle">{cle}</span>
      <span>{children}</span>
    </p>
  )
}
function TerminalTicket() {
  return (
    <div className="terminal">
      {/* Barre de titre */}
      <div className="terminal-barre">
        <div className="terminal-pastilles">
          <span className="pastille pastille-rouge" />
          <span className="pastille pastille-jaune" />
          <span className="pastille pastille-verte" />
        </div>
        <span className="terminal-titre">ticket DEV-001</span>
      </div>
      {/* Contenu */}
      <div className="terminal-corps">
        <p>
          <span className="t-prompt">$</span> AgileTask show AT-001
        </p>
        <div className="terminal-bloc terminal-lignes">
          <Ligne cle="titre">
            <span className="t-orange">Développer le système d'inscription</span>
          </Ligne>
          <div className="terminal-paire">
            <Ligne cle="type">
              <span className="t-sarcelle">Fonctionnalité</span>
            </Ligne>
            <Ligne cle="priorité">
              <span className="t-rouge">HAUTE</span>
            </Ligne>
          </div>
          <div className="terminal-paire">
            <Ligne cle="statut">
              <span className="t-bleu">EN_COURS</span>
            </Ligne>
            <Ligne cle="resp.">
 <span className="t-violet">Développeur A</span>
            </Ligne>
          </div>
          <Ligne cle="limite">20 octobre</Ligne>
        </div>
        <div className="terminal-bloc terminal-lignes">
          <p className="t-doux">// 2 commentaires</p>
          <p>
            <span className="t-bleu">A:</span> "Difficulté avec Spring Security..."
          </p>
          <p>
            <span className="t-bleu">B:</span> "Vérifie SecurityFilterChain."
          </p>
        </div>
        <p className="terminal-bloc">
          <span className="t-prompt">$</span> <span className="t-curseur">_</span>
        </p>
      </div>
    </div>
  )
}
export default TerminalTicket