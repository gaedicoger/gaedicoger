let firstName = prompt("Entrez votre prénom", "Votre prénom");

function sayHello(firstName, hour) {
  let message = "Bonjour " + firstName;
  let message2 = "Bonsoir " + firstName;
  if (hour > 18) {
    return message2;
  } else {
    return message;
  }
}

let messageTitle = sayHello(firstName, 20);

document.querySelector("h1").innerText = messageTitle;
//console.log(sayHello("LadyGaga", 15));
