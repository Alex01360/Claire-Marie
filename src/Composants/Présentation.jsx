const Présentation = ({ props }) => {
    return (
        <section>
            {props.Container.map((item, index) => (
                <div className="Container-Présentation-1" key={index}>
                    {item.Intro.map((item, index) => (
                        <div className="Intro-Présentation" key={index}>
                            <p>{item.texte}</p>
                        </div>
                    ))}

                    <div className="Container-Présentation-2">
                        {item.Catégories.map((item, index) => (
                            <div className="Catégories-Présentation" key={index}>
                                <span>{item.icone}</span>
                                <h1>{item.titre}</h1>
                                <p>{item.texte}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Présentation