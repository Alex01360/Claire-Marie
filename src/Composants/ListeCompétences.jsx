import { useState } from "react";

const ListeCompétences = ({ props }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className='Container-Compétences-1'>
       <h1>Mes Compétences</h1>
       
        {props.Container.map((item, idx) => (
          <div className="Rubriques-Compétences" key={item.titre}>
            <h1 style={{ cursor: "pointer" }} onClick={() => handleClick(idx)}>
              {item.titre}
            </h1>

            {openIndex === idx && (
              <>
                {/* Remplacez ceci par le texte à afficher */}
                <ul>
                  {item.liste.map((li, index) => (
                    <div className="Liste-Compétences" key={index}>
                      <span>✓</span>
                      <li key={index}>{li}</li>
                    </div>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
  );
};

export default ListeCompétences;