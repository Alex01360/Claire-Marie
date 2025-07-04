const Présentation1 = ({ props }) => {
    return (
        <>
            {props.Container.map((item, containerIndex) => (
                <div key={containerIndex} className="Container-Présentation-1">
                    {/* Section Présentation */}
                    <div className="Container-Présentation-2">
                        {item.Présentation.map((presentationItem, index) => (
                            <div key={index} className="Prénom-Image">
                                <img
                                    src={presentationItem.image}
                                    width="60%"
                                    alt={`Présentation ${index}`} />
                            </div>
                        ))}

                        <div className="Container-Présentation-3">
                            <h1>{item.titre}</h1>
                            <h2>{item.sousTitre}</h2>
                            <p>{item.texte}</p>
                        </div>
                    </div>

                    {/* Section Informations */}
                    <div className="Container-Présentation-4">
                        {item.Icone.map((icone, index) => (
                            <div key={index} className="Information">
                                <img src={icone} alt={`Icône ${index}`} />
                                <p>{item.Information[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>

    )
}

export default Présentation1