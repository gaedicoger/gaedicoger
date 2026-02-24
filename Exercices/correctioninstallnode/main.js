// CommonJs module
// const { readFileSync } = require("fs")

// ES Modules

// (File System) — pour interagir avec les fichiers et dossiers
import { readFileSync, existsSync } from "fs";
// (path) - pour manipuler les chemins de fichiers
import { join } from "path";
// (Operating System) — pour obtenir des infos sur le système
// équivalent du "~" dans le terminal.
import { homedir } from "os";

const data = readFileSync("recipes.json", "utf-8");
const track = JSON.parse(data);
// console.log(track);

const home = homedir();
// console.log(home);
const recipesPath = join(home, "recipes");
console.log(recipesPath);

// if (existsSync(recipesPath)) {
//   console.log("Folder exists");
// } else {
//   console.log("Folder does not exist");
// }

// ------------------------------------------------------

// Named export
import { add, subtract, PI } from "./math.js";

console.log(add(1, 2));
console.log(PI);

// Default export
import Calculator from "./calculator.js";

const calc = new Calculator();
console.log(calc.add(10, 5)); // 15
console.log(calc.multiply(4, 7)); // 28
