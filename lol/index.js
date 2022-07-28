const $mioDiv = document.querySelector('.main');

const mioOggetto = {
_chiave: [],

get valore() {
    return this._chiave;
},

set valore(unparametro) {
    this._chiave = unparametro;
    this.renderHTML(this._chiave);
},

renderHTML(data) {
    const productList = data.map((item) => `<li>
    <h2>${item.title}</h2>
    <img style="width: 100px; " src="${item.image}">
    <p>${item.description}</p>
    </li>`).join('');

    return $mioDiv.innerHTML = `<ul>${productList}</ul>`;
}

};

fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then((data) => mioOggetto.valore = data)
// .then(() => console.log(mioOggetto.valore))

