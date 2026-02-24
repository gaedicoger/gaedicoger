// ============================================
// :green_circle: C'EST QUOI NODE.JS ?
// ============================================
// Jusqu'ici on a utilisé JavaScript dans le navigateur (HTML + JS).
// Node.js permet d'exécuter du JavaScript EN DEHORS du navigateur,
// directement dans le terminal, comme un "vrai" langage de programmation.
//
// Avec Node.js on peut :
// - lire et écrire des fichiers sur l'ordinateur
// - accéder aux dossiers du système (home, documents, etc.)
// - créer des outils en ligne de commande (CLI)
// - et bien plus (serveurs web, APIs, etc.)
//
// Pour exécuter ce fichier : node check.js
// (pas besoin de navigateur ni de fichier HTML !)
// ============================================

// ============================================
// Étape 1 — Les imports (import / export de modules)
// ============================================
//
// Node.js est livré avec des "modules" : des boîtes à outils prêtes à l'emploi.
// Chaque module contient des fonctions utiles pour un domaine précis.
// On n'a PAS besoin de les installer, ils sont déjà inclus dans Node.
//
// Pour utiliser une fonction d'un module, on l'importe avec :
//   import { nomDeLaFonction } from "nomDuModule";
//
// :warning: Pourquoi "import" et pas "require" ?
// Historiquement, Node.js utilisait une autre syntaxe appelée CommonJS :
//   const { readFileSync } = require("fs");
// C'est l'ancienne façon de faire, encore très répandue dans du code existant.
//
// Aujourd'hui on utilise les ES Modules (ESM), la syntaxe standard du JavaScript moderne :
//   import { readFileSync } from "fs";
// C'est la même syntaxe que dans le navigateur, plus claire et plus cohérente.
//
// Pour activer les ES Modules dans Node, il faut ajouter dans package.json :
//   "type": "module"
// (sinon Node utilise CommonJS par défaut)
//
// Les 3 modules qu'on utilise ici :
//
// 📁 "fs" (File System) — pour interagir avec les fichiers et dossiers
//    - readFileSync(chemin, encodage) → lit un fichier et renvoie son contenu (string)
//    - existsSync(chemin)             → renvoie true si le fichier/dossier existe, false sinon
//
// 📂 "path" — pour manipuler les chemins de fichiers
//    - join("a", "b", "c") → assemble en "a/b/c"
//    - Pourquoi ne pas juste faire "a" + "/" + "b" ?
//      → Parce que sur Windows c'est "\" et pas "/". join() gère ça tout seul.
//
// 🏠 "os" (Operating System) — pour obtenir des infos sur le système
//    - homedir() → renvoie le chemin du dossier home de l'utilisateur
//      Par exemple : "/Users/mathurin" sur Mac, "C:\Users\mathurin" sur Windows
//      C'est l'équivalent du "~" dans le terminal.
//
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { homedir } from "os";
// ============================================
// Étape 2 — Charger et parser le fichier JSON
// readFileSync lit le fichier et renvoie une string
// JSON.parse transforme cette string en objet JS
// ============================================
const data = readFileSync("recipes.json", "utf-8");
const track = JSON.parse(data);

// ============================================
// Étape 3 — Vérifier que le dossier ~/recipes existe
// homedir() renvoie le chemin du dossier home (~)
// join() assemble les morceaux du chemin proprement
// existsSync() vérifie si un fichier/dossier existe
// ============================================
const home = homedir();
const recipesPath = join(home, "recipes");

if (existsSync(recipesPath)) {
  console.log("✅ dossier recipes");
} else {
  console.log("❌ dossier recipes");
}
