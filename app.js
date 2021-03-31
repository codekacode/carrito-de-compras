const fetchData = async () => {
  const res = await fetch('store.json');
  const data = await res.json(); 
  showData(data)
}

fetchData()


function showData(data){
  let container = document.getElementById('container__products');
  for(let i=0; i<data.length; i++){
    let product = `<div class="product" id="products">
    <img src=${data[i].img}>
    <h3 class="product__title" id="product__title">${data[i].name}</h3>
    <span class="product__price" id="product__price">${data[i].precio}</span>
    <a class="add__carrito" href="#" >Anadir al Carrito<i class="product__icon fas fa-cart-plus"></i></a>
    </div>`
    container.innerHTML += product
  }
  addProduct()
}

function addProduct(){
  let carrito = document.querySelectorAll('a')
  for(let i=0; i< carrito.length; i++){
    carrito[i].addEventListener('click', () => {
      quantityItems(products[i]);
    })
  }
}

function quantityItems(product) {
  let quantity = parseInt(localStorage.getItem('quantityItems'));
  
  let carrito = localStorage.getItem('productsInCart');
  carrito = JSON.parse(carrito);

  if( quantity ) {
      localStorage.setItem('quantityItems', quantity + 1);
      document.querySelector('.tu__carrito span').textContent = quantity + 1;
  } else {
      localStorage.setItem('quantityItems', 1);
      document.querySelector('.tu__carrito span').textContent = 1;
  }
}

