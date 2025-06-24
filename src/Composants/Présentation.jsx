const Présentation = ({ props }) => {
    return (
        <section>
            {props.Container.map((item) => (
                <div className="Container-Présentation-1">
                    <div className="Container-Présentation-2">
                        {item.Présentation.map((item, index) => (
                            <div key={index} className="Prénom-Image">
                                <img src={item.image} width="150px"/>
                            </div>
                        ))}

                        <div className="Container-Présentation-3">
                            <h1>{item.titre}</h1>
                            <h2>{item.texte}</h2>

                            {item.Icone.map((icone, index) => (
                                <div key={index} className="Information">
                                    <img src={icone} />
                                    <p>{item.Information[index]}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {item.Profil.map((item, index) => (
                        <div className="Profil" key={index}>
                            {item.texte.map((texte, texteIndex) => (
                                <p key={texteIndex}>{texte}</p>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}

export default Présentation