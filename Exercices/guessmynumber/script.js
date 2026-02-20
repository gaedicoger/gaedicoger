//J'appelle une fenêtre pour demander à l'utilisateur de choisir un nombre. La valeur est stockée dans une variable.

function askNumber() {
  let givenNumber = Number(
    prompt(
      "Joueur 2 : Essayer de deviner le nombre du joueur 1 : Entrez un nombre de votre choix",
      "Votre nombre",
    ),
  );
  return givenNumber;
}
//console.log(askNumber());

//Je crée une fonction qui va comparer le nombre donné par l'utilisateur au nombre 22.
function didWin(givenNumber, numberToGuess) {
  if (givenNumber === numberToGuess) {
    return true;
  } else {
    return false;
  }
}

function gamePlay() {
  let numberToGuess = askPlayerOne(); //récupère le chiffre 1
  let givenNumber = askNumber(); //récupérer le chiffre 2
  //console.log(givenNumber, typeof givenNumber);
  let hasWon = didWin(givenNumber, numberToGuess); //stocker le nombre et le vérifier
  console.log(hasWon);

  while (!hasWon) {
    if (givenNumber > numberToGuess) {
      alert("Plus petit !");
    } else if (givenNumber < numberToGuess) {
      alert("Plus grand !");
    }
    givenNumber = askNumber(); //demander un nouveau nombre et le stocker
    //console.log(givenNumber, typeof givenNumber);
    hasWon = didWin(givenNumber, numberToGuess); // on met à jour le nombre dans la variable
  }
  alert("Bravo ! Le nombre à deviner était bien : " + numberToGuess + " !");
}

gamePlay();

//Etape 4 en cours :

function askPlayerOne() {
  let givenNumber2 = Number(
    prompt(
      "Joueur 1 : Veuillez proposer un nombre entre 0 et 50",
      "Votre nombre",
    ),
  );

  while (givenNumber2 < 0 || givenNumber2 > 50) {
    givenNumber2 = Number(
      prompt("Attention, un nombre entre 0 et 50 !", "Votre nombre"),
    );
  }
  return givenNumber2;
}
