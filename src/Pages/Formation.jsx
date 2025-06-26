import ListeFormation from "../Composants/ListeFormation"

const Formation = () => {
  return (
    <>
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
        </>
  )
}

export default Formation