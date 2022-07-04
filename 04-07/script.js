// Es 1 

const obj1 = {foo: 'bar'};
const obj2 = {name: 'Marco'};
const obj3 = {surname: 'Guglielmino'}

function objConcat(objFirst, objSecond, objThird){
    const objectFull = {...objFirst, ...objSecond, ...objThird};

    console.log(objectFull);
};

objConcat(obj1, obj2, obj3);

// ES2 Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array,  
// usando il destructuring per prendere la
// length

const array = ['Ciao sono Marco Guglielmino', 'Luigi', 'Luca', 'Giuseppe', 'Francesco', 'Gianfrancesco'];

const stringTenCharacters = array.filter((letters) => {
    return letters.length > 10
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

const shop = {
  _products: [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}],
  get products() { 
    return this._products
},

  set products(val) {
    let [name = 'TV', price = 80, id = 0] = val.split(' '); 
        this._products[id].id = id+1;
    this._products[id].name = name;
      this._products[id].price = parseInt(price);
  }
};

shop.products = 'SamsungS8 500';

shop.products = 'Iphone 800';

console.log(shop.products);




document.body.innerHTML = `
<ul class="product-list">
<li>Id: ${shop.products[0].id}</li>
<li>Name: ${shop.products[0].name}</li>
<li>Price: ${shop.products[0].price}€</li>
</ul>

<ul class="product-list">
<li>Id: ${shop.products[1].id}</li>
<li>Name: ${shop.products[1].name}</li>
<li>Price: ${shop.products[1].price}€</li>
</ul>
`


