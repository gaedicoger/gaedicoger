//ES Modules :
import { readFileSync, existsSync } from "fs"; //(FileSystem) intérgir avec les fichiers et les dossiers
import { join } from "path"; //(path) - pour manipuler les chemins de fichiers
import { homedir } from "os"; //(Operating System) - pour obtenir des infoq sur le système / Equivalent du "~" dans le terminal

//Lire le fichier JSON et parse:
const data = readFileSync("recipes.json", "utf-8"); // transforme le fichier JSON en string pour que ça soit lisible par JS, choisir l'encodage
const track = JSON.parse(data); //parse le fichier JSON transforme le texte brut en données structurées
//console.log(track);

const home = homedir();
//console.log(home);

const recipesPath = join(home, "documents", "recipes"); // Aller chercher le fichier recette
console.log(recipesPath);

if (existsSync(recipesPath)) {
  console.log("Folder exists");
} else {
  console.log("Folder does not exist");
}
