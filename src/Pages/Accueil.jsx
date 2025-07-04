import Contact from "../Composants/Contact";
import Intérêt from "../Composants/Intérêt";
import ListeCompétences from "../Composants/ListeCompétences";
import ListeExpériences from "../Composants/ListeExpériences";
import ListeFormation from "../Composants/ListeFormation";
import Présentation from "../Composants/Présentation";
import ClaireMarie from "../assets/images/Claire-Marie.jpeg";
import iconelocalisation from "../assets/images/icone-localisation.svg";
import iconemail from "../assets/images/icone-mail.svg";
import iconetéléphone from "../assets/images/icone-téléphone.svg";




const Accueil = () => {
  return (
    <>
      <section id="presentation" className="portfolio-section">
        <Présentation
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
                  },
                ]
            }
          }
        />
      </section>

      <section id="competences" className="portfolio-section">
        <ListeCompétences
          props=
          {
            {
              Container:
                [
                  {
                    titre: "Relation Client",
                    liste:
                      [
                        "Accueil et conseil",
                        "Communication téléphonique",
                        "Vente des non médicamenteux et médicaments dérogatoires",
                      ]
                  },

                  {
                    titre: "Gestion Administrative",
                    liste:
                      [
                        "Gestion des stocks et des plannings",
                        "Tenue de caisse",
                        "Bureautique (Exel, Word ou Libre Office)",
                        "Logiciel Centravet pour les commandes",
                      ]
                  },

                  {
                    titre: "Soins Vétérinaires",
                    liste:
                      [
                        "Assistance chirurgicale",
                        "Préparation de l’animal pré et post-opératoire",
                        "Hygiène et stérilisation",
                        "Radioprotection",
                      ]
                  },

                  {
                    titre: "Assurer l'hygiène",
                    liste:
                      [
                        "Hygiène des sols et surfaces",
                        "Tri des déchets",
                      ]
                  },
                ]
            }}
        />
      </section>

      <section id="formation" className="portfolio-section">
        <ListeFormation
          props={{
            Container: [
              {
                titre: "Octobre 2023 - 2025",
                texte: [
                  "Formation en alternance d’auxiliaire vétérinaire",
                  "CFPPA des Sardières - Bourg en Bresse"
                ],
              },

              {
                titre: "Décembre 2023",
                texte: "Attestation de formation Cirra + radioprotection",
              },

              {
                titre: "2023",
                texte: [
                  "Baccalauréat Scientifique et Technologique de l'Agronomie et du Vivant",
                  "Lycée agricole LEGTA de la Côte Saint André (38)"
                ],
              },

              {
                titre: "2022",
                texte: "Diplôme Juge trec équestre",
              },
            ],
          }} />
      </section>

      <section id="experiences" className="portfolio-section">
        <ListeExpériences
          props=
          {
            {
              Container:
                [
                  {
                    titre: "Stages ASV",
                    texte:
                      [
                        "Avril - Juillet 2025 : Clinique des Prairies (Saint Donat sur l'Herbasse, 26) et Clinique des Garennes (Hauterives, 26)",
                        "Février - Mars 2025 : Clinique vétérinaire des Hutins (Saint Julien en Genevois, 74)",
                      ]
                  },

                  {
                    titre: "Apprentie Auxiliaire Spécialisée Vétérinaire",
                    texte:
                      "Octobre 2023 - Octobre 2024 : Clinique vétérinaire Equisarda-Malafretaz (01)",
                    Liste:
                      [
                        "Assistance au vétérinaire en consultation et chirurgie",
                        "Préparation des animaux pré et post-opératoire",
                        "Conseil et accueil clientèle",
                        "Gestion des stocks et plannings"
                      ]
                  },

                  {
                    titre: "Membre de l'association History Horse",
                    texte:
                      "Depuis avril 2022 : Accueil et soins de chevaux maltraités ou réformés",
                  },

                  {
                    titre: "Stage Vétérinaire Ostéopathe et ASV",
                    texte:
                      [
                        "2021-2022 : Clinique NaturOpattes à Vienne (38)",
                      ],
                  },

                  {
                    titre: "Expériences complémentaires",
                    texte:
                      [
                        "2021-2022 : Ouvrière agricole stagiaire : apiculture, bovins laitiers, ovin viande et pluri-culture et centre équestre",
                      ],
                  },
                ]
            }
          }
        />
      </section>

      <section id="profil" className="portfolio-section">
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
                                titre: "Centres d'intérêt",
                              }
                            ],

                          Catégories:
                            [
                              {
                                texte:
                                  [
                                    "Bien-être animal",
                                    "science biologique",
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
                                    "Relations humaines",
                                    "Equitation/RAID",
                                    "Nature",
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
                                    "Sportive"
                                  ],
                              }
                            ]
                        },
                      ]
                  }
                ]
            }
          }
        />
      </section>

   <section id="contact" className="portfolio-section">
      <Contact
        props=
        {
          {
            Container:
              [
                {
                  Intro:
                    [
                      {
                        titre: "Contact",
                       texte: "N'hésitez pas à me contacter pour toute opportunité ou information complémentaire.",
                      }
                    ],

                  Boutons:
                    [
                      {
                        lien: "mailto:basson.clairemarie2016@gmail.com",
                        icone: "📧",
                        texte: "Me contacter"
                      },

                      {
                        lien: "tel:0631399329",
                        icone: "📱",
                        texte: "Appeler"
                      }
                    ]
                }
              ]
          }}
      />
</section>
    </>
  )
}

export default Accueil