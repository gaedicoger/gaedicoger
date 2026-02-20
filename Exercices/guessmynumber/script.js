//J'appelle une fenêtre pour demander à l'utilisateur de choisir un nombre. La valeur est stockée dans une variable.

function askNumber() {
  let givenNumber = Number(
    prompt("Entrez un nombre de votre choix", "Votre nombre"),
  );
  return givenNumber;
}
//console.log(askNumber());

//Je crée une fonction qui va comparer le nombre donné par l'utilisateur au nombre 22.
function didWin(givenNumber) {
  if (givenNumber === 22) {
    return true;
  } else {
    return false;
  }
}

function gamePlay() {
  let givenNumber = askNumber();
  let hasWon = didWin(givenNumber);

  if (hasWon == true) {
    alert("Vous avez gagné!");
  } else {
    alert("Essaie encore");
  }
}

gamePlay();
