
const Intérêt = ({ props }) => {
    return (
            <div className="Container-Intérêt-1">
                <h1>Mon Profil</h1>

                {props.Container.map((item, index) => (
                    <div className="Container-Intérêt-2" key={index}>
                        {item.Qualités.map((item) => (
                            <div className="Container-Intérêt-3">
                                {item.Intro.map((intro, introIndex) => (
                                    <h1 key={introIndex}>{intro.titre}</h1>
                                ))}

                                {item.Catégories.map((catégorie, catIndex) => (
                                    <div className="Intérêts" key={catIndex}>
                                        <>
                                            {catégorie.texte && (
                                                Array.isArray(catégorie.texte)
                                                    ? catégorie.texte.map((texte, texteIndex) => (
                                                        <p key={texteIndex}>{texte}</p>
                                                    ))
                                                    : <p>{catégorie.texte}</p>
                                            )}
                                        </>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
    )
}

export default Intérêt