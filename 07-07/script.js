const getProductHTML = (product) => {
    
    
    
    return `
    <li>
        <div class="element">
            <input type="checkbox">
            <span class="text-articles">${product}</span>
        </div>
       
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
console.log(shopList.products);

});

console.log(shopList.products);