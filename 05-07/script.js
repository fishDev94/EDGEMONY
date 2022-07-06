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
    
    const {name, price, img, id} = product;
    
    return `<li><img src="${img}"><p class="title_product">${name}</p>
    <p class="price_product">${price}€</p>
    <button id="${id}" class="buy">Info!</button></li>`;
  };
  

  const shop = {
    name: "Edgemonics",
    _products: [],
    _page: 1, // pagina corrente
    _per_page: 6, // numero di risultati per pagina
    _id: 0,
  
    get products() {
     
       const indexOfLastPost = (this._page * this._per_page); 
       const indexOfFirstPost = indexOfLastPost - this._per_page; 
       console.log(indexOfFirstPost, indexOfLastPost);

      console.log("Stai leggendo i prodotti di ", this.name);
      const paginatedProducts = this._products.slice(indexOfFirstPost, indexOfLastPost);
      return paginatedProducts;
    },
  
    get getPrice() {
      
      alert(`Super prezzo di oggi: ${this._products[this._id].price}€, Occhio! ne sono rimasti solamente ${this._products[this._id].stock}`)
    }, 

    set idValue(id) {
      this._id = id;
      
    },

    set products(newProducts) {
      this._products = newProducts;
      this.renderHTML();  
    },
  
    /**
     * @param {string | null} newPage
     */
    set page(newPage) {
     this._page = newPage;
      console.log(this._page);
     this.renderHTML();   
    },
  
    renderHTML() {   
        const productsEl = document.querySelector('.products');
        const productsHTML = this.products.map(getProductHTML).join('');
 
        productsEl.innerHTML = `
            <p>Pagina: ${this._page}</p>
            <ul>${productsHTML}</ul>`;
    }
  };

const $buttonPages = document.querySelector('.buttons');

$buttonPages.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const $button = event.target;
    const newPage = Number($button.id);
    shop.page = newPage;
  };
})

const $productsContainer = document.querySelector('.products');

$productsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    shop.idValue = event.target.id;
    shop.getPrice
  }
});

shop.products = [
    {
        id: 0,
        name: "Apple Iphone 8",
        price: 800,
        img: "https://images.eprice.it/nobrand/0/hres/221/204024221/DAM204024221-0-8112ba83-b128-4adb-810a-6525974f9e7b.jpg",
        stock: 40,
},
{
    id: 1,
    name: "SamsungS8",
    price: 700,
    img: "https://www.telaccomodo.it/wp-content/uploads/2017/01/galaxy-s8.jpg",
    stock: 35,
},
{
    id: 2,
    name: "Patate",
    price: 6,
    img: "https://dimages2.gazzettaobjects.it/files/image_768_434/uploads/2022/03/01/621e19369cdb7.jpeg",
    stock: 2,
},
{
    id: 3,
    name: "Tv Samsung 55",
    price: 899,
    img: "https://i.ebayimg.com/images/g/b7UAAOSwhFdgZW7s/s-l640.jpg"

},
{
id: 4,
name: "Sony Xperia Mini",
price: 129,
img: "https://m.media-amazon.com/images/I/41gUqyDwgWL._AC_.jpg",
stock: 76
},
{
id: 5,
name: "Sony Xperia P",
price: 189,
img: "https://www.hwupgrade.it/immagini/Sony-Xperia-P.jpg",
stock: 2,
},
{
    id: 6,
    name: "Huawei Patate",
    price: 299,
    img: "https://img.fruugo.com/product/5/03/113140035_max.jpg",
    stock: 23,

},
{
id: 7,
name: "Banane",
price: 7,
img: "https://m.media-amazon.com/images/I/61eeLzF-yyL._AC_UX342_.jpg",
stock: 2,
},
{
id: 8,
name: "Pesche",
price: 6,
img: "https://www.naturaatavola.it/sites/default/files/styles/image-full/public/nocepesche.naturaatavola.jpg?itok=cec-pVXJ",
stock: 3,
},
{
    id: 9,
    name: "Pesce",
    price: 8,
    img: "https://www.acquariodilivorno.it/data/srv_images/napoleone-1500x900.jpg",
    stock: 200,
},
{
id: 10,
name: "Salmone",
price: 70,
img: "https://c.tenor.com/7xvdEql6Z28AAAAd/smirk-smirk-afk.gif",
stock: 2,
},
{
id: 11,
name: "Presonus Studio 24c",
price: 240,
img: "https://www.midimusic.it/wp-content/uploads/2022/01/presonus-studio_24c-front_big-800x800.jpg",
stock: 25,
},
{
    id: 12,
    name: "M-Audio BX8",
    price: 230,
    img: "https://media.discopiu.com/img/2017/9/21/450384-large-m-audio-bx8-d3-coppia.jpg",
    stock: 86,
    },
    {
    id: 13,
    name: "Macbook Air M1",
    price: 950,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145618000",
    stock: 350,
    },
    {
        id: 14,
        name: "Toshiba Schifiu",
        price: 200,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXCp3QARwktMsHFDxZ5MU-aKzFuSMADtqvIOJiZrLj73L1GHpjKGCkjfLR1taO8b9x5E&usqp=CAU",

    
    },
    {
    id: 15,
    name: "Nintendo Switch Lite",
    price: 199,
    img: "https://mynintendostore.nintendo.it/media/catalog/product/cache/b4cb1f58b4f6fb6dd00a79cd43d6b8db/1/0/10002291-1-nswitchlitehwcoral-h2x1.jpg"
    },
    {
    id: 16,
    name: "ProductHTML",
    price: 240,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/15/1f/32/58/grisouil.jpg",
    stock: 2,
    },
    {
        id: 17,
        name: "Acqua Panna",
        price: 24,
        img: "https://www.bereacasa.it/wp-content/uploads/2021/04/acqua-panna-75cl.jpg",
        stock: 12,
        }
];