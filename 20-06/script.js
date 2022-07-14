// 1 -> Sciviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 4));

// 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

function sum1(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.alert("Insert valid number");
  } else {
    console.log(num1 + num2);
  }
}

console.log(sum1(2, 4));

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma di deve dire che non posso dividere per 0

//sottrazione
function sub(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.alert("Insert valid number");
  } else {
    console.log(num1 - num2);
  }
}

console.log(sub(5, 2));

//moltiplicazione
function mult(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.alert("Insert valid number");
  } else {
    console.log(num1 * num2);
  }
}

console.log(mult(5, 2));

//divisione

function ratio(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.alert("Insert valid number");
  } else if (num2 === 0) {
    console.alert("Impossible!");
  } else {
    console.log(num1 / num2);
  }
}

console.log(ratio(4, 2));

console.clear();
// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

function calculator(operation, num1, num2) {
  return operation(num1, num2);
}

calculator(sum1, 2, 3);
calculator(sub, 2, 3);
calculator(mult, 2, 3);
calculator(ratio, 6, 3);
calculator(ratio, 0, 3);
