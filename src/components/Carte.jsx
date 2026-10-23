function Carte({ icone, couleur = 'bleu', titre, texte }) {
    return (
        <article className="carte">
            <div className="carte-entete">
                <span className={`carte-icone carte-icone-${couleur}`}>{icone}</span>
                <h3>{titre}</h3>
            </div>
            <p>{texte}</p>
        </article>
    )
}
export default Carte