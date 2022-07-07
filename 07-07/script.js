

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

        set reLoadList(el) {
            this._taskList = el
        },

        set removeProduct(id) {
            console.log(id)
            this._taskList.splice(id, 1);
            console.log(this._taskList);
            this.renderHTML();
        },

        renderHTML() {
            const $taskList = document.querySelector('.task-list');
            const prodotti = this.products.map(getProductHTML).join('');
            $taskList.innerHTML = `${prodotti}`
        },

};



const $inputText = document.querySelector('.forminput');
const $deleteBtn = document.querySelector('.task-list');

$inputText.addEventListener('submit', (event) => {
    const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let time = h + ":" + m + ":" + s;
    const $input = document.querySelector('input');
shopList.products = `${$input.value} - ${time}`;
localStorage.setItem("storedList", JSON.stringify(shopList.products));
event.preventDefault();
$input.value = '';
console.log(shopList.products);





});


$deleteBtn.addEventListener('click', (event) => {

    if (event.target.className === 'delete')
    shopList.removeProduct = Number(event.target.id);
    localStorage.setItem("storedList", JSON.stringify(shopList.products));
    console.log(event.target.id);
});

if (JSON.parse(localStorage.getItem("storedList") === null)) {
    localStorage.setItem("storedList", JSON.stringify([]));
  };

const reloadedList = JSON.parse(localStorage.getItem("storedList"));
shopList.reLoadList = reloadedList;
shopList.renderHTML();

console.log(shopList.products);
