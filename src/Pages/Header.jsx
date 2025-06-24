import BarreNavigation from "../Composants/BarreNavigation";

const Header = () => {
  return (
    <>
      <BarreNavigation
        props={
          {
          Container:
            [
              {
                texte: "Accueil",
                navlink: "/"
              },

              {
                texte: "Compétences",
                navlink: "/Compétences"
              },

              {
                texte: "Formation",
                navlink: "/Formation"
              },

              {
                texte: "Expériences",
                navlink: "/Expériences",
              },
            ]
        }
        }
      />
    </>
  )
}

export default Header