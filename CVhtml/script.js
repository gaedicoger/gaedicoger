//Afficher la photo JS:
//Récuperer le bouton
const button2 = document.querySelector("#btn2");
//Ecouter le clic du bouton
button2.addEventListener("click", () => {
  //Afficher l'image en changeant le display
  const profilimage = document.querySelector("#profilimage");
  profilimage.style.display = "block";
});

//Premier bouton:
//Récupérer button
const button = document.querySelector("#btn");
//Ecouter le clic du bouton
button.addEventListener("click", () => {
  //Récupérer le texte
  const text = document.querySelector("#text1");
  //Remplacer le texte
  text.textContent = "On me voit plus !";
});

//formulaire qui affiche quand c'est envoyé:

//récuperer le formulaire
const form = document.querySelector("form");
//recupérer le p
const text = document.querySelector("#confirmation");
//ecouter le bouton submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  text.innerText = "Bien joué !"; //Remplacer le texte
});

//Quand on clique sur les images on affiche une bordure rose avec angles arrondis ?
//récupérer les images
const images = document.querySelectorAll(".logo");
//Itérer sur nos deux images
images.forEach((image) => {
  image.addEventListener("click", () => {
    //Ecouter le clic sur image
    image.style.border = "10px solid pink";
  });
});

//Appliquer le style css

//Exercice DOM JS:
//récupérer le bouton et le texte
const button3 = document.querySelector("#buttonex1DOM");
const text3 = document.querySelector("#exoDOM1");
//Ecouter le bouton

button3.addEventListener("click", () => {
  text3.innerText = "Yeeaah ça marche"; //transformer le titre
});

//Créer une liste:
//Récupérer la liste et le bouton
const listEx = document.querySelector(".listExDOM");
const buttonList = document.querySelector("#buttonEx2DOM");

//Ecouter le bouton
buttonList.addEventListener("click", () => {
  const newItem = document.createElement("li");
  listEx.appendChild(newItem);
  newItem.innerText = "Nouvelle couleur ! ";
});
//Ajouter une ligne à la liste

//Bouton coloré :
//récupérer le bouton :
const buttonColor = document.querySelector("#buttonColor");
//Ecouter le bouton :
buttonColor.addEventListener("click", () => {
  buttonColor.style.backgroundColor = "red";
});
