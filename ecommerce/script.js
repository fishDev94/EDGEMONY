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
    _totalPages: 0,
    // _totalPagesArray: [],
  
    get products() {
     
       const indexOfLastPost = (this._page * this._per_page); 
       const indexOfFirstPost = indexOfLastPost - this._per_page; 
       this._totalPages = Math.ceil(this._products.length/this._per_page)

  
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
    },

    renderPagesButton() {
      const $paging = document.querySelector('.buttons');
      const btnArray = [];
     for (let i=1; i<=shop._totalPages; i++) {
       
       const elBtn = `<button class="btn_pages" id="${i}"><p id="${i}">${i}</p></button>`;
       btnArray.push(elBtn);
       $paging.innerHTML = `${btnArray.join('')}`;
     }

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
            .then(json => {
              const $category = document.querySelector('.sidebar');
              const $clearFilter = document.createElement('div');
                  $clearFilter.classList.add('clear-filter');
                  
              $category.addEventListener("click", (event) => {
                
                if (event.target.tagName === "BUTTON") {
                  console.log(event.target.id)
                  shop.products = json.filter(element => element.category === event.target.id);

                  $clearFilter.innerHTML = 'Clear filter';
                  $category.append($clearFilter);
                  shop.page = 1;
                  shop.renderPagesButton();
                }
                
              console.log(event.target);

              if (event.target.className === "clear-filter") {
                
                event.target.remove();
                shop.products = json
                shop.renderPagesButton();
                // console.log('mi hai cliccato');
              }
            });
              shop.products = json
              shop.renderPagesButton();
            
            })





            
fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((json) => {
              const $categoriesList = document.querySelector('.categories-ul');
              const category = json.map((e) => {
                
                console.log(e);
              return `<button class="li-cat" id="${e}">${e}</button>`;
            }).join('');
            console.log(category);
            $categoriesList.innerHTML = `${category}`
          })

          