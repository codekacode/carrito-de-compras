const products = document.getElementById('products');

const fetchData = async () => {
  try {
    const res = await fetch('store.json');
    const data = await res.json(); 
    showProducts(data)

  } catch (error) {
    console.log(error)
  }
}

fetchData()

function showProducts(data) {
  data.forEach(product => {
    console.log(product);
  })
}

let carrito = document.querySelectorAll('.add__carrito');


for(let i=0; i< carrito.length; i++) {
  carrito[i].addEventListener('click', () => {
    carritoItems()
  });
}

function carritoItems() {
  let productsItems = parseInt(localStorage.getItem('hola'));
  console.log(typeof(productsItems))
  localStorage.setItem('hola', 3);
}
