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
    
    const {title, price, image, id} = product;
    function ivaCalc(price) {
      const res = (price/100) * 22
      
      return res;
    }
    return `<li class="product-card"><img src="${image}"><p class="title_product">${title}</p>
    <p class="price_product"></p>${(price+ivaCalc(price)).toFixed(2)}€</p>
    <button id="${id}" class="buy">Add to Cart</button></li>`;
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
       

  
      const paginatedProducts = this._products.slice(indexOfFirstPost, indexOfLastPost);
      return paginatedProducts;
    },
  
    getPrice() {
      
      alert(`Super prezzo di oggi: ${this._products[this._id].price}€, Occhio! ne sono rimasti solamente ${this._products[this._id].stock}`)
    }, 

    set idValue(id) {
      this._id = id - 1;
      
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
     this.renderHTML();   
    },
  
    renderHTML() {   
        const productsEl = document.querySelector('.products');
        const productsHTML = this.products.map(getProductHTML).join('');
 
        productsEl.innerHTML = `
            <p>Pagina: ${this._page}</p>
            <ul class="products-ul">${productsHTML}</ul>`;
    }
  };

const $buttonPages = document.querySelector('.buttons');

$buttonPages.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" || event.target.tagName === "P") {
    const $button = event.target;
    const newPage = Number($button.id);
    shop.page = newPage;
    
  };
  console.log(event.target);
})

const $productsContainer = document.querySelector('.products');

$productsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    shop.idValue = event.target.id;
    shop.getPrice();
  }
  
});


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>shop.products = json);





            
fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((json) => {
              const $categoriesList = document.querySelector('.categories-ul');
              const category = json.map((e) => {
                
                console.log(e);
              return `<li class="li-cat" id="${e}">${e}</li>`;
            }).join('');
            console.log(category);
            $categoriesList.innerHTML = `${category}`



          })

            