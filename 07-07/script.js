const getProductHTML = (product) => {
    
    
    
    return `
    <li >
        <div class="element">
            <input type="checkbox">
            <span class="text-articles">${product}</span>
        </div>
        <div id="${shopList.products.indexOf(product)}" class="delete">x</div>
    </li>`;
  };

const shopList = {

_taskList: [],

get products() {
    return this._taskList;
},

set products(products) {
this._taskList.push(products)
this.renderHTML();
},

set removeProduct(id) {
    this._taskList.splice(this._taskList.indexOf(id), 1);
    this.renderHTML();
},

renderHTML() {
    const $taskList = document.querySelector('.task-list');
   const prodotti = this.products.map(getProductHTML).join('');
   $taskList.innerHTML = `${prodotti}`
},



};

const $inputText = document.querySelector('.forminput');

$inputText.addEventListener('submit', (event) => {
    const $input = document.querySelector('input');
shopList.products = $input.value;

event.preventDefault();
$input.value = '';
// console.log(shopList.products);

if (event.target.tagName === 'BUTTON') {
    shopList.removeProduct = Number(event.target.id);

}

});

const $deleteBtn = document.querySelector('.task-list');

$deleteBtn.addEventListener('click', (event) => {

    if (event.target.className === 'delete')
    shopList.removeProduct = Number(event.target.id);
    console.log(shopList.products);
});


