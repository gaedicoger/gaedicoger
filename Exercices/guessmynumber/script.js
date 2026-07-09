// Je sors les nombres de la fonction gameplay pour les stocker :
let numberToGuess;
let givenNumber;
let attempts = 0;
let minNumber = 0;
let maxNumber = 50;

//Je récupère le bouton 1, j'écoute le click et je récupère le nombre du joueur 1:
document
  .querySelector("#buttonPlayerOne")
  .addEventListener("click", function () {
    numberToGuess = Number(document.querySelector("#inputPlayerOne").value);
    if (numberToGuess >= 0 && numberToGuess <= 50) {
      const okNumber = document.querySelector("#indices");
      okNumber.textContent = "";
    } else if (numberToGuess > 50) {
      const toBig = document.querySelector("#indices");
      toBig.textContent =
        "Trop grand ! Veuillez choisir un nombre inférieur ou égal à 50";
    } else if (numberToGuess <= 0) {
      const toSmall = document.querySelector("#indices");
      toSmall.textContent =
        "Trop petit ! Veuillez choisir un nombre supérieur ou égal à 0"; // récupère la valeur du champ input
    }
    console.log(numberToGuess);
  });

//Je récupère le bouton 2, j'écoute le click et je récupère le nombre du joueur 2,
document
  .querySelector("#buttonPlayerTwo")
  .addEventListener("click", function () {
    attempts += 1; //j'itère dans la variable qui stocke le nombre des tentatives;
    document.querySelector("#numberAttempts").textContent = //affiche le nombre de tentatives
      attempts + " essais.";
    givenNumber = Number(document.querySelector("#inputPlayerTwo").value); //récupère la valeur du champ input
    gamePlay();
    console.log(givenNumber);
  });

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
  let hasWon = didWin(givenNumber, numberToGuess); //stocker le nombre et le vérifier en le comparant grâce à la fonction didWin
  console.log(hasWon);

  if (hasWon) {
    // si la variable hasWon est true :
    const bravo = document.querySelector("#indices");
    bravo.textContent =
      "Bravo ! Le nombre à deviner était bien : " + numberToGuess + " !";
  } else if (givenNumber < numberToGuess) {
    minNumber = givenNumber;
    const dynamicMin = document.querySelector("#dynamicRangeMin");
    dynamicMin.textContent = minNumber + " < ";
    //const indice1 = document.querySelector("#indices");
    //indice1.textContent = "Plus grand!";
  } else {
    maxNumber = givenNumber;
    const dynamicMax = document.querySelector("#dynamicRangeMax");
    dynamicMax.textContent = " < " + maxNumber;
    //const indice2 = document.querySelector("#indices");
    //indice2.textContent = "Plus petit!";
  }
  hasWon = didWin(givenNumber, numberToGuess); // déclarée deux fois? Why ?
}
