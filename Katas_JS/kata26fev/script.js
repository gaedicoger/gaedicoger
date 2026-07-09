//Ennoncé Kata book :
/*KATA 5 : Objets – "Gestion d'une bibliothèque”
  Objectif pédagogique :
  Manipuler des objets, parcourir leurs propriétés, et modéliser des relations simples.
  Énoncé :
  Tu créees un petit système de gestion de livres. Chaque livre a : titre, auteur, année, genre, nombreDePages.
  Crée une fonction qui :
Ajoute un livre à la bibliothèque
Récupère tous les livres d'un auteur
Filtre les livres par genre
Calcule le nombre total de pages
`    Exemples :*/

const library = {
  books: [
    {
      title: "1984",
      author: "Orwell",
      year: 1949,
      genre: "Fiction",
      pages: 328,
    },
    {
      title: "Fondation",
      author: "Asimov",
      year: 1951,
      genre: "SF",
      pages: 255,
    },
  ],
};

// Ajouter un livre :
library.books.push({
  title: "Dune",
  author: "Herbert",
  year: 1965,
  genre: "SF",
  pages: 688,
});

console.log(library);

//Récupérer les livres par auteur :
const filterByAuthor = library.books.filter(
  (book) => book.author === "Herbert",
);

console.log(filterByAuthor);

//getBooksByGenre(library, "SF");
// [{ title: "Fondation", ... }, { title: "Dune", ... }]
const filterByGenre = library.books.filter((book) => book.genre === "Fiction");

console.log(filterByGenre);
//getTotalPages(library);
// 1271

//Boucles for of :
//const totalPages = 0;

//for (const book of library.books) {
// totalPages += book.pages;
//}

//console.log(totalPages);

const totalPage = library.books.reduce((total, book) => {
  return total + book.pages;
}, 0);

/*correction :
const library = {
      books: [
        { title: "1984", author: "Orwell", year: 1949, genre: "Fiction", pages: 328 },
        { title: "Fondation", author: "Asimov", year: 1951, genre: "SF", pages: 255 },
      ],
    };

// ajouter un nouveau livre dans la library

function addBook(library, book) {
  library.books.push(book);
};

addBook(library, { title: "Dune", author: "Herbert", year: 1965, genre: "SF", pages: 688})

// console.log(library)

// Filtrer par artiste

function getBooksByAuthor(library, searchAuthor) {
  return library.books.filter((book) => book.author === searchAuthor );
};

// console.log(getBooksByAuthor(library, "Orwell"));

// Filtrer par genre

function getBooksByGenre(library, searchGenre) {
  return library.books.filter((book) => book.genre === searchGenre);
};

// console.log(getBooksByGenre(library, "SF"));

// Compter le nombre de page total

function totalPages(library) {
  return library.books.reduce((total, book) => {
    return total + book.pages;
  }, 0);
};

console.log(totalPage(library))

function totalPagesBoucle(library) {
  totalPageBoucle = 0;

  library.books.forEach((book) => {
    totalPageBoucle = totalPageBoucle + book.pages;
  });

  return totalPageBoucle;
};*/
