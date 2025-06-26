import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const BarreNavigation = ({ props }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section>
      {props.Container.map((item) => (
        <>
          <div className="Container-BarreNavigation-1">
            <div className="Container-BarreNavigation-2">
              {item.Présentation.map((item, index) => (
                <div key={index} className="Prénom-Image">
                  <img src={item.image} width="150px" />
                </div>
              ))}

              <div className="Container-BarreNavigation-3">
                <h1>{item.titre}</h1>
                <h2>{item.sousTitre}</h2>
                <p>{item.texte}</p>
              </div>
            </div>

            <div className="Container-BarreNavigation-4">
              {item.Icone.map((icone, index) => (
                <div key={index} className="Information">
                  <img src={icone} />
                  <p>{item.Information[index]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`Container-BarreNavigation-5 ${isSticky ? 'sticky-nav' : ''}`}>
            {item.Navigation.map((item, index) => (
              <div key={index} className="Icone-Titre-Navigation">
                <NavLink
                  to={item.navlink}
                  key={index}
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                >
                  <span>{item.icone}</span>
                  <h1>{item.texte}</h1>
                </NavLink>
              </div>
            ))}
          </div>



        </>
      ))}
    </section>
  );
};

export default BarreNavigation