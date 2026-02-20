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
  //console.log(givenNumber, typeof givenNumber);
  let hasWon = didWin(givenNumber);
  console.log(hasWon);

  while (!hasWon) {
    givenNumber = askNumber(); //demander un nouveau nombre et le stocker
    //console.log(givenNumber, typeof givenNumber);
    hasWon = didWin(givenNumber); // on met à jour le nombre dans la variable
  }
  console.log("Bravo !");
}

gamePlay();
