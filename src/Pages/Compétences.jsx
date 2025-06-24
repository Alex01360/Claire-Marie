import ListeCompétences from "../Composants/ListeCompétences"

const Compétences = () => {
  return (
<ListeCompétences 
props=
{{
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

/>)

}

export default Compétences