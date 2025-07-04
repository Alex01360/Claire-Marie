
const ListeFormation = ({ props }) => {
  return (
      <div className="Container-ListeFormation-1">
        <h1>Mes Formations</h1>

        <div className="Container-ListeFormation-2">
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
      </div>
  )
}

export default ListeFormation