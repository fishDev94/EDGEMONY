// Es 1 

const obj1 = {foo: 'bar'};
const obj2 = {name: 'Marco'};
const obj3 = {surname: 'Guglielmino'}

function objConcat(objFirst, objSecond, objThird){
    return {...objFirst, ...objSecond, ...objThird}
};

console.log(objConcat(obj1, obj2, obj3));

// ES2 Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array,  
// usando il destructuring per prendere la
// length

const array = ['Ciao sono Marco Guglielmino', 'Luigi', 'Luca', 'Giuseppe', 'Francesco', 'Gianfrancesco'];

const stringTenCharacters = array.filter(({length}) => {
    return length >= 10
  });

  console.log(stringTenCharacters);

//   ## Get/Set

// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:

// - leggere _products nel getter
// - sovrascrivere _products nel setter
// - contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body

// ```js
// shop.products = [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}]
// // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>
const getProductHTML = (product) => {
  const {name, price} = product;
  return `<li>${name} - ${price}€</li>`
}

const shop = {
  _products: [],
  get products() { 
    return this._products
},

  // set newProducts(val) {
  // const [name = "", price = 0] = val.split(' '); 
  // let id = this._products.length + 1;
  // const ogg = Object.create(this._products[0]);
  // ogg.id = id;
  // ogg.name = name;
  // ogg.price = parseInt(price);
  // this._products.push(ogg);
  // },

  // set products(val) {
  //   const [name = "", price = 0] = val.split(' ');
  //   this._products[0].name = name;
  //   this._products[0].price = parseInt(price);

  // }

  set products(val) {
    this._products = val;
    const prodHTML = getProductHTML(val)
    document.body.innerHTML = `
    <ul class="product-list">
    ${prodHTML}
    </ul>
    `;
    // document.body.innerHTML = `


//     <ul class="product-list">
// <li>Id: ${this._products.id}</li>
// <li>Name: ${this._products.name}</li>
// <li>Price: ${this._products.price}€</li>
// </ul>`
  },
  
};

// shop.products = 'HuaweiP30 300';
// shop.newProducts = 'SamsungS8 500';
// shop.newProducts = 'Iphone8 900';


// shop.products = 'Iphone 800';

console.log(shop.products);

shop.products = {
  id: 1,
  name: 'Huawei P30 lite',
  price: 300,
};


// document.body.innerHTML = `
// <ul class="product-list">
// <li>Id: ${shop.products[0].id}</li>
// <li>Name: ${shop.products[0].name}</li>
// <li>Price: ${shop.products[0].price}€</li>
// </ul>

// <ul class="product-list">
// <li>Id: ${shop.products[1].id}</li>
// <li>Name: ${shop.products[1].name}</li>
// <li>Price: ${shop.products[1].price}€</li>
// </ul>

// <ul class="product-list">
// <li>Id: ${shop.products[2].id}</li>
// <li>Name: ${shop.products[2].name}</li>
// <li>Price: ${shop.products[2].price}€</li>
// </ul>

// <ul class="product-list">
// <li>Id: ${shop.products[3].id}</li>
// <li>Name: ${shop.products[3].name}</li>
// <li>Price: ${shop.products[3].price}€</li>
// </ul>
// `


