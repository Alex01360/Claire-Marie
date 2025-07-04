const Contact = ({ props }) => {
    return (
        <>
            {props.Container.map((item, index) => (
                <div className="Container-Contact-1 " key={index}>

                    {item.Intro.map((subItem, subIndex) => (
                        <div className="Contact" key={`${index}-${subIndex}`}>
                            <h1>{subItem.titre}</h1>
                            <p>{subItem.texte}</p>
                        </div>
                    ))}

                    <div className="Container-Contact-2">
                        {item.Boutons && item.Boutons.map((bouton, boutonIndex) => (
                            <button
                                key={boutonIndex}
                                onClick={() => window.location.href = bouton.lien}
                            >
                                <span>{bouton.icone}</span>
                                <p>{bouton.texte}</p>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Contact