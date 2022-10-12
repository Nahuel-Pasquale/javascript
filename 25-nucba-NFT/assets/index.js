const products = document.querySelector(".products-container");
// contenedor del producto de carrito
const productsCart = document.querySelector(".cart-container");
// precio total del carrito
const total = document.querySelector(".total");
// el contenedor de las categorias
const categories = document.querySelector(".categories");
// lista de categorias (htmlCollection)
const categoriesList = document.querySelectorAll(".category");
// boton de ver mas
const btnLoad = document.querySelector(".btn-load");
// boton de comprar
const buyBtn = document.querySelector(".btn-buy");
// boton para abrir y cerrar carrito
const cartBtn = document.querySelector(".cart-label");
// boton para abrir y cerrar el menu
const barsBtn = document.querySelector(".menu-label");
// carrito
const cartMenu = document.querySelector(".cart");
// hamburguesa
const barsMenu = document.querySelector(".navbar-list");
// overlay para darle un efecto copado
const overlay = document.querySelector(".overlay");

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem('cart', JSON.stringify(cartList))
};

const renderProduct = (product) => {
  const { id, name, bid, user, userImg, cardImg } = product;

  return `
    <div class="product">
      <img src=${cardImg} alt=${name} />
      <div class="product-info">
        <!-- top -->
        <div class="product-top">
            <h3>${name}</h3>
            <p>Current Bid</p>
        </div>

        <!-- mid -->
        <div class="product-mid">
            <div class="product-user">
                <img src=${userImg} alt="user" />
                <p>@${user}</p>
            </div>
            <span>${bid} eTH</span>
        </div>

        <!-- bot -->
        <div class="product-bot">
            <div class="product-offer">
                <div class="offer-time">
                    <img src="./assets/img/fire.png" alt="" />
                    <p>05:12:07</p>
                </div>
                <button class="btn-add"
                data-id='${id}'
                data-name='${name}'
                data-bid='${bid}'
                data-img='${cardImg}'>Add</button>
            </div>
        </div>
      </div>
    </div>
  `;
}

const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct) // .map((e) => renderProduct(e))
    .join('');
}

const renderFilteredProducts = (category) => {
  const productsList = productsData.filter(
    (product) => product.category === category
  );
  products.innerHTML = productsList.map(renderProduct).join('');
}


const renderProducts = (index = 0, category = undefined) => {
  if(!category) { // !undefined === true
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category)
};

// LOGICA DE FILTROS

// funcion para cambiar todos los estados relacionados a los filtros
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  // necesito cambiar el estado visual de los botones
  changeBtnActiveState(selectedCategory);
  // necesito evaluar si el boton ver mas se muestra o no
  changeShowMoreBtnState(selectedCategory);
}

// funcion para cambiar el estado visual de las categorias (la categoria seleccionada)
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if(categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove('active');
      return;
    }
    categoryBtn.classList.add('active');
  })
};

// evaluar si sacamos o no el boton mostrar mas
const changeShowMoreBtnState = (category) => {
  if(!category) {
    btnLoad.classList.remove('hidden');
    return;
  }
  btnLoad.classList.add('hidden');
};

const applyFilter = (e) => {
  console.log(e.target.dataset)
  if(!e.target.classList.contains('category')) return;
  changeFilterState(e);
  if(!e.target.dataset.category) {
    products.innerHTML = '';
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category)
  }
};

const isLastIndexOF = () => productsController.nextProductsIndex === productsController.productsLimit;

const showMoreProducts = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex ++;
  if(isLastIndexOF()){
    btnLoad.classList.add('hidden');
  }
}



const init = () => {
  renderProducts();
  categories.addEventListener('click', applyFilter);
  btnLoad.addEventListener('click', showMoreProducts);
}

init();




