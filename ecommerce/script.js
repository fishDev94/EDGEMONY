
const $buttonPages = document.querySelector('.buttons');
const $productsContainer = document.querySelector('.products');
const $cart = document.querySelector('.cart-list');
const $cartIcon = document.querySelector('.cart');
const $totalItems = document.querySelector('.items');
const $category = document.querySelector('.sidebar');
const $clearFilter = document.createElement('div');

$clearFilter.classList.add('clear-filter');

localStorage.setItem('cart', JSON.stringify([]));
localStorage.setItem('products', JSON.stringify([]));

const getProductHTML = (product) => {
    const {title, price, image, id} = product;
    function ivaCalc(price) {
      const res = (price/100) * 22
      return res;
    }
    return `<li class="product-card"><img src="${image}"><p class="title_product">${title}</p>
    <p class="price_product">${(price+ivaCalc(price)).toFixed(2)}€</p>
    <button id="${id}" class="buy">Add to Cart</button></li>`;
  };
  
  const getProductCartHTML = (product) => {
    
    const {title, price, image} = product;
    function ivaCalc(price) {
      const res = (price/100) * 22
      return res;
    }
    return `<li class="product-cart"><img src="${image}"><div class="textcard-cart"><p class="title_product">${title}</p>
    <p class="price_product">${(price+ivaCalc(price)).toFixed(2)}€</p></div>
    <button id="${shop._cart.indexOf(product)}" class="remove">x</button></li>`;
  };

  const shop = {
    name: "Edgemonics",
    _products: [],
    _page: 1,
    _per_page: 6,
    _id: 0,
    _totalPages: 0,
    _cart: [],
  
    get cart() {
      $totalItems.innerText = `${this._cart.length} Items`
      localStorage.setItem('cart', JSON.stringify(this._cart));
      return this._cart;
    },

    get products() {
      this._cart = JSON.parse(localStorage.getItem('cart'));
      const indexOfLastPost = (this._page * this._per_page); 
      const indexOfFirstPost = indexOfLastPost - this._per_page; 
      this._totalPages = Math.ceil(this._products.length/this._per_page)
      const paginatedProducts = this._products.slice(indexOfFirstPost, indexOfLastPost);
      this._products.map((product, index) => {product.id = index; return product})
      return paginatedProducts;
    },

    set idValue(id) {
      this._id = id - 1;
    },

    set cartProduct(id) {
      this._cart.push(this._products[id]);
      console.log(id);
      console.log(this._products);
      this._cart.map((product, index) => {
        product.id = index; 
        
        return product
      })
      $totalItems.innerText = `${this._cart.length} Items`
    },

    set products(newProducts) {
      this._products = newProducts;
      this.renderHTML(); 
      this.renderPagesButton(); 
      this.renderCartHTML();
    },
  
    /**
     * @param {string | null} newPage
     */
    set page(newPage) {
     this._page = newPage;
     this.renderHTML(); 
    },
  
    set removeItemCart(id) {
      this._cart.splice(id, 1)
    },

    renderHTML() {   
        const productsEl = document.querySelector('.products');
        const productsHTML = this.products.map(getProductHTML).join('');
        productsEl.innerHTML = `
            <p>Pagina: ${this._page}</p>
            <ul class="products-ul">${productsHTML}</ul>`;
    },

    renderCartHTML() {
      const $cart = document.querySelector('.cart-list');
      const productsHTML = this.cart.map(getProductCartHTML).join('');
      $cart.innerHTML = `<ul class="list-cart">${productsHTML}</ul>`
    },

    renderPagesButton() {
      const $paging = document.querySelector('.buttons');
      const btnArray = [];
     for (let i=1; i<=shop._totalPages; i++) {      
       const elBtn = `<button class="btn_pages" id="${i}"><p id="${i}">${i}</p></button>`;
       btnArray.push(elBtn);
       $paging.innerHTML = `${btnArray.join('')}`;
     }}
  };

$cartIcon.addEventListener("click", (event) => {
  $cart.classList.toggle('active');
});

$buttonPages.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" || event.target.tagName === "P") {
    const $button = event.target;
    const newPage = Number($button.id);
    shop.page = newPage;
  }
});

$productsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    shop.cartProduct = event.target.id;
    shop.renderCartHTML();
  }
});

document.body.querySelector('.main-body').addEventListener("click", (event) => {
  if (event.target.className !== '.cart-list' || event.target.classList === '.nav-bar') {
    $cart.classList.remove('active');
  }
});

$cart.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    shop.removeItemCart = event.target.id;
    shop.renderCartHTML();
  }
});

fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json => {
    $category.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
      shop.products = JSON.parse(localStorage.getItem('products')).filter(element => element.category === event.target.id);
      $clearFilter.innerHTML = 'Clear filter';
      $category.append($clearFilter);
      shop.page = 1;
      shop.renderPagesButton();
      }
    
      if (event.target.className === "clear-filter") {
        event.target.remove();
        shop.products = json;
        shop.renderPagesButton();
      }
    }
  );
            
      if (JSON.parse(localStorage.getItem('products')).length === 0) {
        shop.products = json;
      }

  localStorage.setItem('products', JSON.stringify(json));
});
            
fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((json) => {
              const $categoriesList = document.querySelector('.categories-ul');
              const category = json.map((e) => {
              return `<button class="li-cat" id="${e}">${e}</button>`;
            }).join('');
            $categoriesList.innerHTML = `${category}`
          })

          shop.products = JSON.parse(localStorage.getItem('products'));