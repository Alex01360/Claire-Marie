import Intérêt from "../Composants/Intérêt";
import Présentation from "../Composants/Présentation";
const Accueil = () => {
  return (
    <>
      <Présentation
  props={
    {
    Container: 
    [
      {
        Intro: 
        [
          {
            texte: "Mon objectif est d'accéder à un contrat d'apprentissage pour poursuivre la formation d'auxiliaire spécialisée vétérinaire au GIPSA au centre de Bourg-En-Bresse. J'ai fait du Pet-sitter et Baby-sitter."
          }
        ],

        Catégories: 
        [
          {
            icone:"🐾",
            titre: "Passion pour les animaux",
            texte: "Je suis une personne motivée et autonome. J'aime apprendre et me perfectionner dans mes connaissances."
          },

          {
                        icone:"📚",
            titre: "Formation continue",
            texte: "Actuellement en formation d'auxiliaire vétérinaire au CFPPA des Sardières"
          },

          {
                        icone:"💼",
            titre: "Expérience pratique",
            texte: "Stages dans plusieurs cliniques vétérinaires pour une formation complète"
          }
        ]
      }
    ]
  }}
/>


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