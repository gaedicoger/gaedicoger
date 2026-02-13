//Récupérer button
const button = document.querySelector("#btn");
//Ecouter le clic du bouton
button.addEventListener("click", () => {
  //Récupérer le texte
  const text = document.querySelector("#text1");
  //Remplacer le texte
  text.textContent = "On me voit plus !";
});

//Récuperer le bouton
const button2 = document.querySelector("#btn2");
//Ecouter le clic du bouton
button2.addEventListener("click", () => {
  //Afficher l'image en changeant le display
  const profilimage = document.querySelector("#profilimage");
  profilimage.style.display = "block";
});
