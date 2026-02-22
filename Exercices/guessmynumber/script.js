// Je sors les nombres de la fonction gameplay pour les stocker :
let numberToGuess;
let givenNumber;

//Je récupère le bouton 1, j'écoute le click et je récupère le nombre:
document
  .querySelector("#buttonPlayerOne")
  .addEventListener("click", function () {
    numberToGuess = Number(document.querySelector("#inputPlayerOne").value);
    console.log(numberToGuess);
  });
//Je récupère le bouton 2, j'écoute le click et je récupère le nombre
document
  .querySelector("#buttonPlayerTwo")
  .addEventListener("click", function () {
    givenNumber = Number(document.querySelector("#inputPlayerTwo").value);
    console.log(givenNumber);
  });

//J'appelle une fenêtre pour demander à un joueur de choisir un nombre entre 0 et 50.
function askPlayerOne() {
  let givenNumber2 = Number(
    prompt(
      "Joueur 1 : Veuillez proposer un nombre entre 0 et 50",
      "Votre nombre",
    ),
  );

  // Je vérifie que ce nombre et bien compris entre 0 et 50.
  while (givenNumber2 < 0 || givenNumber2 > 50) {
    givenNumber2 = Number(
      prompt("Attention, un nombre entre 0 et 50 !", "Votre nombre"),
    );
  }
  return givenNumber2;
}

//J'appelle une fenêtre pour demander au joueur 2 d'essayer de deviner le nombre du joueur 1:
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

//Je crée une fonction qui va comparer le nombre donné par le joueur 1 au nombre donné par le joueur 2.
function didWin(givenNumber, numberToGuess) {
  if (givenNumber === numberToGuess) {
    return true;
  } else {
    return false;
  }
}

//La fonction gamePlay qui orchestre toutes les fonctions :
/*function gamePlay() {
  numberToGuess = askPlayerOne(); //récupère le chiffre 1
  givenNumber = askNumber(); //récupérer le chiffre 2
  //console.log(givenNumber, typeof givenNumber);
  let hasWon = didWin(givenNumber, numberToGuess); //stocker le nombre et le vérifier
  console.log(hasWon);

  while (!hasWon) {
    //vérifie et donne des indices pour aider le joueur 2
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

gamePlay();*/
