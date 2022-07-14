import { q, createCard } from "./utils.js";
import { GET, POST, DELETE } from "./api.js";

const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");
const BASE_URL = "https://edgemony-backend.herokuapp.com/series";

localStorage.setItem("username", userLogIn);

const $productList = newEl("div");
const $productListSecond = newEl("div");
const $productListThrird = newEl("div");
const $errContent = newEl("div");
const $userNameText = newEl("h4");
const $userNameFooter = newEl("p");
const $titleCount = newEl("h2");
const $titleCategory = newEl("h2");
const $titleJw = newEl("h2");
const $titleErr = newEl("h1");

$productList.className = "product";
$productListSecond.className = "product";
$productListThrird.className = "product";
$errContent.className = "err_content";

const $navBar = q(".main_navbar");
const $footer = q(".main_footer");
const $mainContent = q(".main_content");
const $countEl = q(".filter_count");
const $categoryEl = q(".filter_category");
const $categoryJw = q(".filter_jaw");

$titleCount.textContent = "Sopra i 200pz in Magazino!";
$titleCategory.textContent = "Elettronica!";
$titleJw.textContent = "Gioielli!";
$titleErr.textContent = `Mi dispiace ${userLogIn}, non sei Marco, non puoi accedere al contenuto del sito.`;

if (localStorage.getItem("username") == "Marco") {
  GET(BASE_URL).then((data) => {
    data.map((serie) => {
      const imgOrPlaceholder = serie.poster || "https://picsum.photos/200/300";

      try {
        // if (!serie.description) {
        //   throw new Error('La serie non contiene una descrizione');
        // }
        createCard(
          document.body,
          imgOrPlaceholder,
          serie.title,
          serie.year,
          serie.id
        );
      } catch (error) {
        console.log(error);
      }
    });
  });
}

$userNameText.textContent = `username: ${userLogIn}`;
$userNameFooter.textContent = `username: ${userLogIn}`;
$mainContent.append($errContent);
$errContent.append($titleErr);
$mainContent.style = "height: 100%";
$navBar.append($userNameText);
$footer.append($userNameFooter);
