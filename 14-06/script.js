// console.log("ciao");

// // alert("Ciao");

// // let userMsg = prompt("Ciao chi sei?");

// // console.log("Benvenuto", userMsg);

// // var pippo = "Ciao sono Pippo";

// let pippo = "Ciao sono Pippo";

// const pippo = "Ciao sono Pippo";

// // boolean type;

// const isOpen = true; // true or false
// const myName = 'Marco';
// const myAge = 28;

// Calculator - PSEUDOCODICE
//1.  - Chiede due numeri da input
//    - se l'utente non inserisce uno o entrambi i numeri,
//      ritorna una stringa che ci informa su cio e interrompe il flusso del programma

//2. - Chieda all'utente l'operazione da eseguire
//     -IF l'utente non inserisce alcuna operazione, ci informa

//3. - Venga mostrato all'utente il risultato dell'operazione

// CALCULATOR - code

const firstNum = prompt("Inserisci il primo numero:");
const secondNum = prompt("Inserisci il secondo numero:");
const operationChoice = prompt("inserisci pure l'operazione desiderata");

const parsedFirstNum = parseInt(firstNum);
const parsedSecondNum = parseInt(secondNum);

if (firstNum.length === 0 || secondNum.length === 0) {
  console.log("Non hai inserito un numero");
}

// if (operationChoice === "addizione") {
//   console.log(
//     "il risultato della tua operazione è:",
//     parsedFirstNum + parsedSecondNum
//   );
// }

switch (operationChoice) {
  case "addizione" || "+":
    console.log(
      "il risultato della tua operazione è:",
      parsedFirstNum + parsedSecondNum
    );
    break;
  case "-":
    console.log(
      "il risultato della tua operazione è:",
      parsedFirstNum - parsedSecondNum
    );
    break;
  case "*":
    console.log(
      "il risultato della tua operazione è:",
      parsedFirstNum * parsedSecondNum
    );
    break;
  case "/":
    console.log(
      "il risultato della tua operazione è:",
      parsedFirstNum / parsedSecondNum
    );
    break;
  default:
    console.log("Non hai selezionato alcuna operazione.");
}
