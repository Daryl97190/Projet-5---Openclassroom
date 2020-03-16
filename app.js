// Création de l'objet "phrase" qui contient les groupes de mot sujet, verbe, complement et fin de phrase et la fonction aléatoire //
let phrase = {
  sujet: [" 'Avec la situation présente ", " 'Considérant la conjoncture actuelle ", " 'Où que nous mène la crise qui nous occupe ", " 'Vu l'impasse conjoncturelle ", " 'Du fait de la restriction de ces derniers temps "],
  verbe: [" il faut etudier toutes les", " il convient d'étudier toutes les", " je suggère fortement d'avoir à l'esprit chacune des ", " nous sommes contraints d'essayer la totalité des", " il est très important d'uniformiser certaines"],
  complement: [" solutions envisageable ", " issues possible", " problématiques s'offrant à nous", " choix du passé", " actions réalisables"],
  finDePhrase: [" à long terme.' ", " pour longtemps.' ", " pour le futur.' ", " depuis longtemps.' "],
  random: function random(array) { // La fonction random permet de généré Un nombre entre 0 (inclus) et 1 (exclu). La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur puis on multiplie par la taille d'un tableau par .length
    return array[Math.floor(Math.random() * array.length)]
  }
}
// Fonction de rafraichissement qui permet d'arreter le programme //
function stop() {
  document.location.reload(false)
}
// Fonction qui permet de générer les phrases avec la concaténation lorsque que vous cliquez sur le boutton //
$('#generer').click(function () {
  $('.citation').html(phrase.random(phrase.sujet) + phrase.random(phrase.verbe) + phrase.random(phrase.complement) + phrase.random(phrase.finDePhrase))
});





