function TerminalConnexion() {
  return (
    <div className="terminal terminal-auth">
      <div className="terminal-pastilles">
        <span className="pastille pastille-rouge" />
        <span className="pastille pastille-jaune" />
        <span className="pastille pastille-verte" />
      </div>
      <div className="terminal-code">
        <p>
          <span className="t-violet">if</span> (utilisateur.authentifié) &#123;
        </p>
        <p className="t-retrait">
          rediriger(<span className="t-vert">"/dashboard"</span>);
        </p>
        <p>&#125;</p>
        <p />
        <p className="t-commentaire">// rôle déterminé par projet :</p>
        <p className="t-commentaire">// CHEF (créateur) ou MEMBRE</p>
      </div>
    </div>
  )
}
export default TerminalConnexion
