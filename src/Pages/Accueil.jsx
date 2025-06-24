import ClaireMarie from "../assets/images/Claire-Marie.jpeg";
import iconelocalisation from "../assets/images/icone-localisation.svg";
import iconemail from "../assets/images/icone-mail.svg";
import iconetéléphone from "../assets/images/icone-téléphone.svg";
import Intérêt from "../Composants/Intérêt";
import Présentation from "../Composants/Présentation";

const Accueil = () => {
  return (
    <>
      <Présentation
        props={{
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
                texte: "Apprentie ASV (Auxiliaire Vétérinaire)",

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

                Profil:
                  [
                    {
                      texte:
                        [
                          "Je suis une personne autonome et curieuse. J'ai toujours été passionnée par les animaux et j'aime apprendre de nouvelles choses.",
                          "J'ai fait du Pet-sitter et Baby-sitter.",
                          "Mon objectif est d'accéder à un contrat d'apprentissage pour poursuivre la formation d'auxiliaire spécialisée vétérinaire au GIPSA au centre de Bourg-En-Bresse."
                        ]
                    }
                  ]
              }
            ]
        }} />

      <Intérêt
        props=
        {
          {
            Container:
              [
                {
                  Qualités:
                    [
                      {
                        Intro:
                          [
                            {
                              titre: "Centre d'intérêt",
                            }
                          ],

                        Catégories:
                          [
                            {
                              texte:
                                [
                                  "Bien-être animal",
                                  "Soins médicaux",
                                  "science/biologie",
                                  "Connaissances",
                                ],
                            }
                          ]
                      },

                         {
                        Intro:
                          [
                            {
                              titre: "Passions",
                            }
                          ],

                        Catégories:
                          [
                            {
                              texte:
                                [
                                  "Animaux",
                                  "Social",
                                  "Sport",
                                  "Nature",
                                  "Apprendre",
                                ],
                            }
                          ]
                      },

                         {
                        Intro:
                          [
                            {
                              titre: "Qualités",
                            }
                          ],

                        Catégories:
                          [
                            {
                              texte:
                                [
                                  "Persévérante",
                                  "Passionnée",
                                  "Autonome",
                                  "Curieuse",
                                  "Motivée",
                                  "Volontaire",
                                  "Polyvalente",
                                  "Sportive (RAID,équitation)"
                                ],
                            }
                          ]
                      },
                    ]
                }]
          }
        }
      />
    </>
  )
}

export default Accueil