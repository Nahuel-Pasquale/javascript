// Contenedor de productos
const products = document.querySelector(".products-container");
// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
//El total en precio del carrito
const total = document.querySelector(".total");
// El contenedor de las categorías
const categories = document.querySelector(".categories");
// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category");
// Botón de ver más
const btnLoad = document.querySelector(".btn-load");
// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");
// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".cart-label");
// Botón para abrir y cerrar menú
const barsBtn = document.querySelector(".menu-label");
// Carrito
const cartMenu = document.querySelector(".cart");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Modal de agregado al carrito.
const deleteBtn = document.querySelector(".btn-delete");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
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
};

const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct) // .map((e) => renderProduct(e))
    .join("");
};

const renderFilteredProducts = (category) => {
  const productsList = productsData.filter(
    (product) => product.category === category
  );
  products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    // !undefined === true
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category);
};

// LOGICA DE FILTROS

// funcion para cambiar todos los estados relacionados a los filtros
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  // necesito cambiar el estado visual de los botones
  changeBtnActiveState(selectedCategory);
  // necesito evaluar si el boton ver mas se muestra o no
  changeShowMoreBtnState(selectedCategory);
};

// funcion para cambiar el estado visual de las categorias (la categoria seleccionada)
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

// evaluar si sacamos o no el boton mostrar mas
const changeShowMoreBtnState = (category) => {
  if (!category) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

const applyFilter = (e) => {
  console.log(e.target.dataset);
  if (!e.target.classList.contains("category")) return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
    productsController.nextProductsIndex = 1;
  }
};

const isLastIndexOF = () =>
  productsController.nextProductsIndex === productsController.productsLimit;

const showMoreProducts = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex++;
  if (isLastIndexOF()) {
    btnLoad.classList.add("hidden");
  }
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

// Logica de agregado de productos y manejo del carrito.

const renderCartProduct = (cartProduct) => {
  const { id, name, bid, img, quantity } = cartProduct;
  return `    
  <div class="cart-item">
    <img src=${img} alt="Nft del carrito" />
    <div class="item-info">
      <h3 class="item-title">${name}</h3>
      <p class="item-bid">Current bid</p>
      <span class="item-price">${bid} ETH</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>`;
};

const renderCart = () => {
  // Si el carrito esta vacío
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg"> No hay productos en el carrito. </p>`;
    return;
  }
  // Renderizamos lo que hay
  productsCart.innerHTML = cart.map(renderCartProduct).join("");
};

const getCartTotal = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.bid) * Number(cur.quantity),
    0
  );
};

const showTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} eTH`;
};

const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
};

// Funcion para manipular el añadido de productos

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createProductData = (id, name, bid, img) => {
  return { id, name, bid, img };
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, name, bid, img } = e.target.dataset;

  const product = createProductData(id, name, bid, img);

  //El producto exista en el carrito
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    //Que no exista el product
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito");
  }
  checkCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === existingProduct.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct;
  });
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};
//
//
const completeBuy = () => {
  completeCartAction(
    "¿Desea completar su compra?",
    "La compra se ha realizado correctamente"
  );
};

const deleteCart = () => {
  completeCartAction(
    "¿Está seguro de que desea vaciar el carrito?",
    "No hay productos en el carrito"
  );
};

const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
  btnLoad.addEventListener("click", showMoreProducts);
  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart);
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeOnScroll);
  overlay.addEventListener("click", closeOnOverlayClick);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  products.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

init();
