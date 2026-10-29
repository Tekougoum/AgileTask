function TerminalCompte() {
  return (
    <div className="terminal terminal-auth" >
      <div className="terminal-pastilles">
        <span className="pastille pastille-rouge" />
        <span className="pastille pastille-jaune" />
        <span className="pastille pastille-verte" />
      </div>
      <div className="terminal-code">
        <p>
          <span className="t-violet">const</span> compte = &#123;
        </p>
        <p className="t-retrait">
          projets: <span className="t-orange">[]</span>,
        </p>
        <p className="t-retrait">
          invitations: <span className="t-orange">[]</span>,
        </p>
        <p className="t-retrait">
          tickets: <span className="t-orange">[]</span>,
        </p>
        <p>&#125;;</p>
        <p className="t-commentaire">// le rôle dépend du projet</p>
      </div>
    </div>
  )
}
export default TerminalCompte
