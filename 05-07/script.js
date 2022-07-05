const product = {
    id: 1,
    name: "TV",
    price: 40,
    addons: {
      decoder: 10,
      qled: 40,
      stereo: 20
    }
  };
  

  const values = Object.values(product.addons)

  let sum = 0;
  const fullOptionalPrice = values.forEach((val) => sum += val);
  
  console.log(sum + product.price);


  
const getProductHTML = (product) => {
    const {name, price} = product;
    return `<li>${name} - ${price}€</li>`;
  };
  
  const shop = {
    name: "Edgemonics",
    _products: [],
    _page: 1, // pagina corrente
    _per_page: 6, // numero di risultati per pagina
  
    get products() {
      /**
       * Qui dentro dovremmo riuscire a paginare i prodotti.
       * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
       * */

       const indexOfLastPost = (this._page * this._per_page); 
       const indexOfFirstPost = indexOfLastPost - this._per_page; 
       console.log(indexOfFirstPost, indexOfLastPost);

      console.log("Stai leggendo i prodotti di ", this.name);
    //   const startIndex = 0; // ...
    //   const endIndex = this._products.length/this._per_page; // ...
      const paginatedProducts = this._products.slice(indexOfFirstPost, indexOfLastPost);
      
      return paginatedProducts;
    },
  
    set products(newProducts) {
      /**
       * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
       * così da rendere il metodo più snello
       * **/
  
      this._products = newProducts;
        this.renderHTML();
      
    },
  
    set page(newPage) {
      /**
       * Aggiorniamo la pagina corrente.
       * Sarà che dobbiamo aggiornare il DOM anche qui?
       * */
     this._page = newPage;
      console.log(this._page);
      
     
    },
  
    renderHTML() {
        this._products.remove;
        const productsEl = document.querySelector('.products');
        const productsHTML = this.products.map(getProductHTML).join("");
        productsEl.innerHTML = `
            
            <ul>${productsHTML}</ul>
        `;
        
        
      /**
       * Aggiorniamo il DOM stampando i risultati a schermo.
       * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
       * con una struttura del genere 
       * <body>
       *  div.shop -> aggiornato ad ogni chiamata della funzione
       *  div.pagination -> questo non si tocca mai
       * </body
       * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
       * **/
    }
  };

const button1 = document.querySelector('.first_page');
const button2 = document.querySelector('.second_page');
const button3 = document.querySelector('.third_page');

button1.addEventListener('click', () => {
    
    shop.page = 1;  
    shop.renderHTML();
})
button2.addEventListener('click', () => {
    
    shop.page = 2;  
    shop.renderHTML();


})

button3.addEventListener('click', () => {
    shop.page = 3;
    shop.renderHTML();
})


// button.addEventListener('click', () => shop.page);

shop.products = [
    {
        id: 0,
        name: "Apple Iphone 8",
        price: 800,

},
{
    id: 1,
    name: "SamsungS8",
    price: 700
},
{
    id: 3,
    name: "Patate",
    price: 6
},
{
    id: 4,
    name: "Tv Samsung 55",
    price: 899,

},
{
id: 5,
name: "Sony Xperia Mini",
price: 129
},
{
id: 6,
name: "Sony Xperia U",
price: 189
},
{
    id: 7,
    name: "Huawei Patate",
    price: 299,

},
{
id: 8,
name: "Banane",
price: 7
},
{
id: 9,
name: "Pesche",
price: 6
},
{
    id: 10,
    name: "Pesce",
    price: 8,

},
{
id: 11,
name: "Salmone",
price: 70
},
{
id: 12,
name: "Presonus Studio 24c",
price: 240
},
{
    id: 13,
    name: "M-Audio BX8",
    price: 230
    },
    {
    id: 14,
    name: "Macbook Air M1",
    price: 950
    },
    {
        id: 15,
        name: "Toshiba Schifiu",
        price: 200,
    
    },
    {
    id: 16,
    name: "Nintendo Switch Lite",
    price: 199
    },
    {
    id: 17,
    name: "ProductHTML",
    price: 240
    },
    {
        id: 18,
        name: "Acqua Panna",
        price: 24
        }
]