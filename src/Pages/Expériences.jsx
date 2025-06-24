import ListeExpériences from "../Composants/ListeExpériences"

const Expériences = () => {
  return (
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
  )
}

export default Expériences