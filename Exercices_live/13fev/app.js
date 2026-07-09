// Objectif attendu : au clic sur le bouton, changer le texte du paragraphe #status

//Récupérer le bouton :
const button = document.querySelector("#changeTextBtn");
//Ecouter le clic du bouton:
button.addEventListener("click", () => {
  //récupérer le texte :
  const status = document.querySelector("#status");
  //remplacer le text :
  status.textContent = "Status : texte change !";
});
