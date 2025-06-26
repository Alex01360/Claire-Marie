import ClaireMarie from "../assets/images/Claire-Marie.jpeg";
import iconelocalisation from "../assets/images/icone-localisation.svg";
import iconemail from "../assets/images/icone-mail.svg";
import iconetéléphone from "../assets/images/icone-téléphone.svg";
import BarreNavigation from "../Composants/BarreNavigation";


const Header = () => {
  return (
    <>
      <BarreNavigation
        props=
        {
          {
            Container:
              [
                {
                  Présentation:
                    [
                      {
                        image: ClaireMarie,
                      },
                    ],

                  titre: "BASSON Claire Marie",
                  sousTitre: "Apprentie ASV (Auxiliaire Vétérinaire)",
                  texte: "Je suis une personne autonome et curieuse. J'ai toujours été passionnée par les animaux et j'aime apprendre de nouvelles choses.",

                  Icone:
                    [
                      iconetéléphone,
                      iconemail,
                      iconelocalisation,
                    ],

                  Information:
                    [
                      "06 31 39 93 29",
                      "basson.clairemarie2016@gmail.com",
                      "Jarcieu 38270 France",
                    ],

                  Navigation:
                    [
                      {
                        icone: "🏠",
                        texte: "Accueil",
                        navlink: "/"
                      },

                      {
                        icone: "💼",
                        texte: "Compétences",
                        navlink: "/Compétences"
                      },

                      {
                        icone: "🎓",
                        texte: "Formation",
                        navlink: "/Formation"
                      },

                      {
                        icone: "🏥",
                        texte: "Expériences",
                        navlink: "/Expériences",
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