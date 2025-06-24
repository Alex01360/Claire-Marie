
const Intérêt = ({ props }) => {
    return (
        <section>
            {props.Container.map((item, index) => (
                <div className="Container-Intérêt-1" key={index}>       
                    {item.Qualités.map((item) => (
                        <div className="Container-Intérêt-2">
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
        </section>
    )
}

export default Intérêt