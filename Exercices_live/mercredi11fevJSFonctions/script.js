//Objectif : L’utilisateur rentre un nombre, ex : 4. Dans la console, je dois voir successivement 16 et 160 :
function askUser() {
  let number1 = Number(prompt("Veuillez saisir un chiffre"));
  return number1;
}

let number1 = askUser();

//Écris une fonction qui prend en argument un nombre entier et retourne son carré:
//let number1 = 6

function queryNumbers(number1) {
  let total = number1 * number1;
  console.log("Je donne " + number1 + " j'obtiens le carré: " + total);
  return total;
}

//Stocke le résultat de la fonction dans une variable:
let result = queryNumbers(number1);

//Ecris une fonction qui va multiplier par 10 le résulat de la fonction précédente :
function multiByTen(result) {
  let total2 = result * 10;
  console.log(
    "Je donne " +
      result +
      " à ma fonction de multiplication, j’obtiens " +
      total2 +
      ".",
  );
  return total2;
}

multiByTen(result);
