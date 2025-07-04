
import menuBurger from "../assets/images/menu-burger.svg";
import BarreNavigation from "../Composants/BarreNavigation";
import ScrollProgress from "../Composants/ScrollProgress";

const Header = () => {
  return (
    <>
      <ScrollProgress />
      <BarreNavigation
      props=
      {
        {
        Container:
          [
          {
            MenuBurger:
            [
              menuBurger,
              menuBurger,
              menuBurger
            ],

            Navigation:
            [
              {
              icone: "🏠",
              texte: "Accueil",
              sectionId: "presentation"
              },

              {
              icone: "💼",
              texte: "Compétences",
              sectionId: "competences"
              },

              {
              icone: "🎓",
              texte: "Formation",
              sectionId: "formation"
              },

              {
              icone: "🏥",
              texte: "Expériences",
              sectionId: "experiences"
              },

              {
              icone: "👤",
              texte: "Profil",
              sectionId: "profil"
              },

              {
              icone: "✉️",
              texte: "contact",
              sectionId: "contact"
              },
            ]
          }
          ]
        }
      }

      />
    </>
    )
}

export default Header