//Création de la classe CitationDeRappeur avec la methodeconstructor qui est utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé class.
class CitationsDeRappeur {
  constructor(citations) {
    this.citations = citations
  }
  random(array) {  // La fonction random permet de généré Un nombre entre 0 (inclus) et 1 (exclu). La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur puis on multiplie par la taille d'un tableau par .length
    return array[Math.floor(Math.random() * array.length)]
  }
  // Ensemble de fonction pour l'apparation de citation de Booba
  citationKopp() {
   //Effacer les anciennes citations à chaque cliques en recuperant l'id phrase
    document.getElementById('phrase').innerHTML = "";
    //Récuperation du nombre de citations voulues avec la valeur
    let nbCitation = document.getElementById("nbcitation").value;
    for (let i = 1; i <= nbCitation; i++) {
      // On applique la propriété random sur les citations des rappeurs
      let punchlineBooba = this.random(this.citations);
      // On vérifie si l'identifiant du boutton radio de booba est cocher
      if (document.getElementById('booba').checked) {
        ///Assemblage de mot
        var compo = (" \" " + punchlineBooba + "  \" \n ");
      }
       //Affichage des citations
       // Si l'identitfiant du boutton radio de booba est cocher
      if (document.getElementById('booba').checked) {
        // On crée un nouvel élèment blockquote
        let p = document.createElement("blockquote")
        // Crée un nouveau nœud de texte avec compo
        let afficher = document.createTextNode(compo);
        p.appendChild(afficher);
        //affiche la citation dans phrase
        document.getElementById("phrase").appendChild(p);
      }
    }
  }
  // Ensemble de fonction pour l'apparation de citation de Rohff
  citationHoussni() {
    //Effacer les anciennes citations à chaque cliques en recuperant l'id phrase
    document.getElementById('phrase').innerHTML = "";
    //Récuperation du nombre de citations voulues avec la valeur
    let nbCitation = document.getElementById("nbcitation").value;
    for (let i = 1; i <= nbCitation; i++) {
        // On applique la propriété random sur les citations des rappeurs
      let punchlineRohff = this.random(this.citations);
      // On vérifie si l'identifiant du boutton radio de rohff est cocher
      if (document.getElementById('rohff').checked) {
         ///Assemblage de mot
        var compo = (" \" " + punchlineRohff + "  \" \n ");
      }
    //Affichage des citaitions
    // Si l'identitfiant du boutton radio de booba est cocher
      if (document.getElementById('rohff').checked) {
        // On crée un nouvel élèment blockquote
        let p = document.createElement("blockquote")
        // Crée un nouveau nœud de texte avec compo
        let afficher = document.createTextNode(compo);
        p.appendChild(afficher);
         //affiche la citation dans phrase
        document.getElementById("phrase").appendChild(p);
      }
    }
  }
}
// Constante de la classe CitationDeRappeur
const CitationsBooba = new CitationsDeRappeur(["Je traîne en bas de chez toi, je fais chuter le prix de l'immobilier. ", " Hors de portée, mort de rire sans remords quand j’écoute les menaces de mort des forces de l’ordre. ", " La vie c’est dur, ça fait mal dès qu’ça commence, c’est pour ça qu’on pleure tous à la naissance. ", " J'ai fait la guerre pour habiter rue de la paix. ", "Des fois j'me dope comme un coureur cycliste.", " Quand se réveillent mes cicatrices, j'me sens si seul et si triste. ", "Les rappeurs m’envient, sont tous en galère.", " Un jour de mon salaire c’est leur assurance vie. ", " C'est pas qu'j'aime pas me mélanger, mais disons simplement qu'les aigles ne volent pas avec les pigeons. ", "C'est pas qu'j'aime pas me mélanger, mais disons simplement qu'les aigles ne volent pas avec les pigeons ! ", "J'en suis où j'en suis, malgré tellement d'erreurs, j'suis trop en avance pour leur demander l'heure", "Mon prof m’a dit « tu finiras à Nanterre », je ne voulais pas réussir de toute manière.", "Encore quelques millions et je ne saurais plus qui tu es.", "Tu veux t’assoir sur le trône, faudra t’asseoir sur mes genoux. ", "Tout le monde peut s’en sortir, aucune cité n’a de barreaux. "]);

const CitationsRohff = new CitationsDeRappeur(["J’ai assez de vices pour faire du bricolage. ", "La vie est moche mais les souvenirs lui donnent du charme. ", "Pendant que les riches tuent le temps, le temps tue les pauvres. ", "Même dans le Sahara je refuserai ton verre d’eau. ", "On t’aime pour ce que t’as, on te deteste pour ce que t’es. ", "Promets pas la Lune si t’as pas la fusée. ", "Contente toi de ce que te donne le Créateur. L’argent ne fait le bonheur que des gratteurs. ", "Les jours nous creusent et les années nous enterrent. ", "On peut recoller les morceaux ça tiendra plus comme avant. ", "Je vis chaque jour de ma vie comme si c’était le dernier. Et quand mon fils me sourit c’est comme si c’était le premier.", "Des façons de m’aimer, y’en n’a pas 50. Soit tu m’aimes à la folie, ou tu aimes mon compte en banque.", "Je sais même plus à quoi tu ressembles, tellement tu me tournes le dos.", "Avant c’était nous contre eux tous, maintenant c’est nous contre nous devant eux tous", "J’ai besoin de personne, juste pour m’enterrer : c’est tout ! ", "Tes sentiments se prennent des murs tellement il fait noir dans les cœurs.", "Quand on s’est jamais vendu, comment se racheter ?"]);

// Fonction de rafraichissement qui permet d'arreter le programme
function stop() {
  document.location.reload(false)
}
