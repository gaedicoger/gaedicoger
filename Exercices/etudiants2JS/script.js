const students = {
  A001: {
    id: "A001",
    name: "Alice Martin",
    age: 22,
    major: "Computer Science",
    grades: [14, 16, 12, 18, 15],
    absences: 3,
    courses: ["JavaScript", "Algorithms", "Database"],
  },
  A002: {
    id: "A002",
    name: "Bob Dupont",
    age: 24,
    major: "Mathematics",
    grades: [11, 9, 15, 8, 13],
    absences: 7,
    courses: ["Calculus", "Statistics", "Algebra"],
  },
  A003: {
    id: "A003",
    name: "Claire Leroy",
    age: 21,
    major: "Computer Science",
    grades: [17, 19, 16, 18, 20],
    absences: 1,
    courses: ["JavaScript", "Web Development", "Data Structures"],
  },
  A004: {
    id: "A004",
    name: "David Moreau",
    age: 23,
    major: "Physics",
    grades: [12, 14, 11, 10, 13],
    absences: 5,
    courses: ["Mechanics", "Quantum Physics", "Thermodynamics"],
  },
  A005: {
    id: "A005",
    name: "Emma Bernard",
    age: 22,
    major: "Computer Science",
    grades: [15, 17, 16, 14, 19],
    absences: 2,
    courses: ["JavaScript", "Networks", "Security"],
  },
};

//Consignes : Implémentez les fonctions suivantes :

//1-Calculer la moyenne de chaque étudiant·e:
//Déclarer une fonction calcule de moyenne:
function calcMoyStudent(student) {
  //Déclarer une variable contenant une méthode reduce pour additionner les notes
  const total = student.grades.reduce(function (acc, totalNotes) {
    //Retourner le total des notes:
    return acc + totalNotes;
  }, 0);
  let numberGrades = student.grades.length; //Variable Compter le nombre de notes
  return total / numberGrades; //Calculer la moyenne:
}

for (let student in students) {
  const moyenne = calcMoyStudent(students[student]);
  console.log(students[student].name + " : " + moyenne);
}

//2-Trouver les étudiant·es d'une filière donnée :

function findStudentByMajor(students, major) {
  const resultMajor = [];
  for (student in students) {
    if (students[student].major === major) {
      resultMajor.push(students[student].name + students[student].major);
    }
  }
  return resultMajor;
}

const filteredMajor = findStudentByMajor(students, "Computer Science");
console.log(filteredMajor);

//3-Identifier l'étudiante avec la meilleure moyenne :
function findBestStudent(students) {
  let bestMoy = 0;
  let bestMoyName = "";
  for (let student in students) {
    const moyenne = calcMoyStudent(students[student]);
    if (moyenne > bestMoy) {
      bestMoy = moyenne;
      bestMoyName = students[student].name;
    }
  }
  return bestMoyName + " " + bestMoy;
}
console.log(findBestStudent(students));

//4-Statistiques par filière (moyenne des moyennes)
function statsByMajorMoy(major) {
  let arrayMoyByMajor = [];
  for (let student in students) {
    if (students[student].major === major) {
      arrayMoyByMajor.push(calcMoyStudent(students[student]));
    }
  }
  const totalByMajor = arrayMoyByMajor.reduce(function (acc, totalNotes) {
    //Retourner le total des notes:
    return acc + totalNotes;
  }, 0);
  return (totalByMajor / arrayMoyByMajor.length).toFixed(2); //Calculer la moyenne:
}
console.log(statsByMajorMoy("Computer Science"));

//4-Statistiques par filière (taux d'absentéisme)
function statsByMajorPresence(major) {
  let arrayAbsenceByMajor = [];

  for (let student in students) {
    if (students[student].major === major) {
      arrayAbsenceByMajor.push(students[student].absences);
    }
  }
  const totalAbsenceByMajor = arrayAbsenceByMajor.reduce(function (
    acc,
    totalAbsence,
  ) {
    //Retourner le total des absences
    return acc + totalAbsence;
  }, 0);
  return (
    "En moyenne les étudiants de " +
    major +
    " sont absents " +
    (totalAbsenceByMajor / arrayAbsenceByMajor.length).toFixed(2) +
    " fois."
  ); //Calculer le pourcentage:
}
console.log(statsByMajorPresence("Computer Science"));

//5-Ajouter une nouvelle note à un étudiante
function addGrade(student, newGrade) {
  students[student].grades.push(newGrade);
}

addGrade("A001", 20);

console.log(students["A001"].grades);
