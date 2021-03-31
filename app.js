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
}

function addProduct(){
  let carrito = document.querySelectorAll('a')
  for(let i=0; i< carrito.length; i++){
    carrito[i].addEventListener('click', () => {
      console.log("chick product")
    })
  }
}

addProduct()