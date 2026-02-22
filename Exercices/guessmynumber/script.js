// Je sors les nombres de la fonction gameplay pour les stocker :
let numberToGuess;
let givenNumber;
let attempts = 0;

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
    attempts += 1;
    document.querySelector("#numberAttempts").textContent =
      attempts + "essais.";
    givenNumber = Number(document.querySelector("#inputPlayerTwo").value);
    gamePlay();
    console.log(givenNumber);
  });

/*J'appelle une fenêtre pour demander à un joueur de choisir un nombre entre 0 et 50.
function askPlayerOne() {
  let givenNumber2 = Number(
    prompt(
      "Joueur 1 : Veuillez proposer un nombre entre 0 et 50",
      "Votre nombre",
    ),
  );*/

/*// Je vérifie que ce nombre et bien compris entre 0 et 50.
  while (givenNumber2 < 0 || givenNumber2 > 50) {
    givenNumber2 = Number(
      prompt("Attention, un nombre entre 0 et 50 !", "Votre nombre"),
    );
  }
  return givenNumber2;
}*/

//Je crée une fonction qui va comparer le nombre donné par le joueur 1 au nombre donné par le joueur 2.
function didWin(givenNumber, numberToGuess) {
  if (givenNumber === numberToGuess) {
    return true;
  } else {
    return false;
  }
}

//La fonction gamePlay qui orchestre toutes les fonctions :
function gamePlay() {
  let hasWon = didWin(givenNumber, numberToGuess); //stocker le nombre et le vérifier
  console.log(hasWon);

  if (hasWon) {
    const bravo = document.querySelector("#indices");
    bravo.textContent =
      "Bravo ! Le nombre à deviner était bien : " + numberToGuess + " !";
  } else if (givenNumber < numberToGuess) {
    const indice1 = document.querySelector("#indices");
    indice1.textContent = "Plus grand!";
  } else {
    const indice2 = document.querySelector("#indices");
    indice2.textContent = "Plus petit!";
  }
  hasWon = didWin(givenNumber, numberToGuess);
}
