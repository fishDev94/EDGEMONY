// function welcome() {
//   return "Ciao ragazzi!";
// }

// function sum(numOne, numTwo) {
//   //...
//   return numOne + numTwo;
// }

// // function sub(numOne, numTwo) {
// //   return numOne - numTwo;
// // }

// // const PI = 3.14

// const sumFiveTwo = sum(5, 2);
// const sumTenTwo = sum(10, 2);

// // console.log(welcome())

// // --------------------------
// function formatText(string) {
//   const minuscolina = string.toLowerCase();

//   return minuscolina.trim();
// }

// const user1 = formatText("       CasI-9201");
// const user2 = formatText("CasImIrroOO-9211");
// const user3 = formatText("           CasI-23211        ");

// // const user1 = '       CasI-9201'.toLocaleLowerCase().trim()

// // La funzione deve:
// //  - accettare una stringa come arg.
// //  - aggiungere alla stringa la porzione in farfallino
// //    - aggiungere ad ogni vocale presente, una 'f' e la vocale stessa
// //
// //  es. 'ciao' => 'cifiafaofo'

// function translateInFarf(word) {
//   // const word = prompt('Inserisci la tua parola');
//   const translatedText = [];

//   for (char of word) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       translatedText.push(char + "f" + char);
//     } else {
//       translatedText.push(char);
//     }
//   }

//   return translatedText.join("");
// }

// Objects
const myCar = {
  color: "red",
  brand: "Ferrari",
  km: 0,
  seats: 3,
  engineRun: function () {
    console.log("Vruuum Vruuum!");
  },
  turnLeft: function () {
    console.log("<===");
  },
  turnRight: function () {
    console.log("===>");
  },
};

// pseuso
// 1. chiedere all'utente di inserire un primo numero, un secondo numero, e l'operazione da effettuare, che può essere
// somma sottrazione divisione moltiplicazione
// 2. restituire all'utente il risultato tramite un alert()

function operation() {
  const numFirst = parseInt(prompt("Inserisci il primo numero:"));
  const operatorSign = prompt("Inserisci qui l'operazione");
  const numSecond = parseInt(prompt("Inserisci il secondo numero:"));
  let result = 0;

  switch (operatorSign.toLowerCase()) {
    case "+":
    case "addizione":
      result = numFirst + numSecond;
      break;
    case "-":
    case "sottrazione":
      result = numFirst - numSecond;
      break;
    case "*":
    case "moltiplicazione":
      result = numFirst * numSecond;
      break;
    case "/":
    case "divisione":
      result = numFirst / numSecond;
      break;
    default:
      alert("non hai inserito alcun operatore.");

      return `il risultato è` + result;
  }
}

alert(operation()); //invoco la funzione operation() per far partire la calcolatrice

function datiUtente() {
  const userInfo = {
    name: "",
    surname: "",
    age: "",
  };

  const userAddress = {
    email: "",
  };

  userInfo.name = prompt("Inserisci il tuo nome:");
  userInfo.surname = prompt("Inserisci il tuo cognome:");
  userInfo.age = prompt("Inserisci la tua età:");
  userAddress.email = prompt("Inserisci la tua email");

  const userData = Object.assign(userInfo, userAddress); //Qui ho unito 2 object
  const town = Object.create(userData); //Ho creato una nuova chiave

  for (const [a, b] of Object.entries(userData)) {
    console.log(`${a}: ${b}`);
  } //Creo una lista con Chiave: Valore

  userData.town = prompt("Scrivi la tua città"); //Qui assegno il valore prompt() alla chiave town dentro il nuovo object userData

  alert(
    `ciao ${userData.name} ${userData.surname} hai ${userData.age} anni, la tua mail è ${userData.email} e sei di ${userData.town}`
  );
}

console.log(datiUtente()); //Invoco la funzione datiUtente()

//   if (operatorSign == "+" || operatorSign == "addizione") {
//     return parseInt(numFirst) + parseInt(numSecond);
//   } else if (operatorSign == "-" || operatorSign == "sottrazione") {
//     return parseInt(numFirst) - parseInt(numSecond);
//   } else if (operatorSign == "*" || operatorSign == "moltiplicazione") {
//     return parseInt(numFirst) * parseInt(numSecond);
//   } else if (operatorSign == "/" || operatorSign == "divisione") {
//     return parseInt(numFirst) / parseInt(numSecond);
//   } else alert("inserisci un segno valido");
// }

// const inputEl = document.querySelector("input");
// const buttonEl = document.querySelector("button");
// const h1El = document.querySelector("h1");

// buttonEl.addEventListener("click", () => {
//   h1El.textContent = translateInFarf(inputEl.value);
// });
