import { useState, useEffect } from "react";

const BarreNavigation = ({ props }) => {
  const [activeSection, setActiveSection] = useState("presentation");
  const [menuOpen, setMenuOpen] = useState(false);

  // Définir sections sans useMemo
  const sections = [
    "presentation",
    "competences",
    "formation",
    "experiences",
    "profil",
    "contact"
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navBarHeight = window.innerWidth >= 950 ? -20 : 15;
      const elementPosition = element.offsetTop - navBarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setMenuOpen(false); // Ferme le menu après clic
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, );

  return (
    <section>
      {props.Container.map((item, containerIndex) => (
        <div key={containerIndex} className="Container-BarreNavigation-1">

          {/* Burger Menu Button */}
          <button
            className={`burger-menu${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {item.MenuBurger.map((item, idx) => (
              <img key={idx} src={item} />
            ))}
          </button>

          {/* Navigation */}
          <nav
            className={`Container-BarreNavigation-2${menuOpen ? " show" : ""}`}
          >
            {item.Navigation.map((navItem, index) => (
              <button
                key={index}
                className={`nav-link ${activeSection === navItem.sectionId ? "nav-link-active" : ""
                  }`}
                onClick={() => {
                  scrollToSection(navItem.sectionId);
                  setActiveSection(navItem.sectionId);
                }}
                style={
                  activeSection === navItem.sectionId
                    ? { backgroundColor: "rgba(33, 150, 243, 1)", color: "" }
                    : {}
                }
              >
                <span>{navItem.icone}</span>
                <p>{navItem.texte}</p>
              </button>
            ))}
          </nav>
        </div>
      ))}
    </section>
  );
};

export default BarreNavigation;
