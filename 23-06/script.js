// --- Esercizi 23-06

// Timeout
//  Stampiamo dopo 1,5,10 secondi la data corrente in questo formato
//  "Ora : Minuti"

// possono essere 3 timeout diversi oppure bonus:
// usare un array ti timeout [1,5,10].forEach

// Interval
// 1) Fare il console.log analogo a quello mostrato su time.is

// 2) dato un array ( [42, 23, 1, 7, 12, 99] )
//    ogni secondo se abbiamo ancora elementi non dichiarati peschiamo un nuovo numero,
//    quando non abbiamo più numeri fare il clearInterval
//   tip: dobbiamo contare quante volte abbiamo fatto parte l'interval

// DOM
// 1) Prendiamo l'esercizo 1 e lo applichiamo al document.body.innerHTML

// (function () {
//   const orari = (method, interval) => {
//     method();
//     setTimeout(method, interval);
//   };
//   const getSecondsFn = () => {
//     console.log(new Date().getSeconds());
//   };

//   orari(getSecondsFn, 1000);
// })();
(function () {
  const getTime = () => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    console.log(hour, minutes, seconds);
  };

  setTimeout(getTime, 1000);
  setTimeout(getTime, 5000);
  setTimeout(getTime, 10_000);
})();

(function () {
  const array = [1, 5, 10];

  const getTime = () => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    console.log(hour, minutes, seconds);
  };

  const delayedTime = (element, index, array) => {
    setTimeout(getTime, 1000 * element);
  };

  array.forEach(delayedTime);
})();

(function () {
  const getTime = () => {
    // console.clear();
    const hour = `${new Date().getHours()}`.padStart(2, "0");
    const minutes = `${new Date().getMinutes()}`.padStart(2, "0");
    const seconds = `${new Date().getSeconds()}`.padStart(2, "0");
    // console.log(hour, minutes, seconds);
    document.body.innerHTML = `
      <div class="orologio">
        <h1>${hour}:${minutes}:${seconds}</h1>
      </div>`;
  };
  setInterval(getTime, 1000);
})();

(function () {
  const array = [42, 23, 1, 7, 12, 99];

  const randomizeNumber = () => {
    const random = Math.floor(Math.random() * array.length);
    console.log(array[random]);
    array.splice(random, 1);
  };
  const stopInterval = () => clearInterval(timerId);

  const timerId = setInterval(randomizeNumber, 1000);

  setTimeout(stopInterval, 1000 * array.length);
})();
