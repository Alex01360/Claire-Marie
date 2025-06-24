
const ListeExpériences = ({ props }) => (
    <section>
        <div className="Container-ListeExpériences-1 ">
            {props.Container.map((item, index) => (
                <div key={index} className="Formation-Item">
                    <h1>{item.titre}</h1>

                    {item.texte && (
                        Array.isArray(item.texte)
                            ? item.texte.map((texte, index) => (
                                <p key={index}>{texte}</p>
                            ))
                            : <p>{item.texte}</p>
                    )}

                    {item.Liste && (
                        <ul>
                            {item.Liste.map((listeItem, index) => (
                                <li key={index}>{listeItem}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    </section>
);

export default ListeExpériences;
