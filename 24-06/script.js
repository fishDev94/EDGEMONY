// --- Esercizi

// Creare un piccolo counter
// Partiamo dal solo body in HTML
// - Generiamo da JS due bottoni ed un DIV

//[ok] - Inseriamo gli elementi a schermo
// [ok]- Nel div avremo sempre a schermo lo stato del nostro counter ("1" oppure "2" oppure "3", ...)
// [ok] - Aggiungere al primo bottone la funzionalità di incremento
// [ok]- Aggiungere al secondo bottone la funzionalità di decremento

// Bonus:
//[ok] mettiamo un limite di decremento a 0
//[ok] mettiamo un limite di incremento a 10

// Super bonus:
// Rimuovere il codice duplicato

(function () {
  const $body = document.body;
  const $divCounter = document.createElement("div");
  const $buttonDecrease = document.createElement("button");
  const $buttonIncrease = document.createElement("button");
  const $mainTitle = document.createElement("h1");

  $mainTitle.innerText = "Contatore dell'acqua, quanto STA CUNSUMANNU?";
  $divCounter.innerText = 0;
  $divCounter.classList.add("counter");
  $buttonDecrease.innerText = "-";
  $buttonIncrease.innerText = "+";

  $body.append($mainTitle, $buttonDecrease, $divCounter, $buttonIncrease);

  $buttonIncrease.addEventListener("click", () => {
    if ($divCounter.innerText < 10) {
      $divCounter.innerText++;
    }
  });

  $buttonDecrease.addEventListener("click", () => {
    if ($divCounter.innerText > 0) {
      $divCounter.innerText--;
    }
  });
})();
