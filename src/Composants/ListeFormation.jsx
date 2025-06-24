
const ListeFormation = ({ props }) => {
  return (
    <section>
      <div className="Container-ListeFormation-1">
        {props.Container.map((item, index) => (
          <div key={index} className="Rubriques-ListeFormation">
            <h1>{item.titre}</h1>
            
            {item.texte && (
              Array.isArray(item.texte)
                ? item.texte.map((texte, index) => (
                  <p key={index}>{texte}</p>
                ))
                : <p>{item.texte}</p>
            )}      </div>
        ))}
      </div>
    </section>
  )
}

export default ListeFormation