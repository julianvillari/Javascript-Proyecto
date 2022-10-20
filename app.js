import { validarProductoRepetido } from "./src/accionesCarrito.js";
import { obtenerProductos } from "./src/obtenerProductos.js";

const mostrarProductos = async () => {
    const contenedorProductos = document.getElementById('contedor-productos')

    const productos = await obtenerProductos();


productos.forEach(producto => {
    const div = document.createElement('div')

    div.classList.add('card')

    div.innerHTML += `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${producto.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">Descripcion: ${producto.desc}</p>
      <p class="card-text">Precio: ${producto.precio}</p>
      <a class="btn btn-primary" id=boton${producto.id}>Comprar</a>
    </div>
  </div>`
  contenedorProductos.appendChild(div);

  const boton = document.getElementById(`boton${producto.id}`);

  boton.addEventListener(`click`, ()=> {
    // alert(`Se agrego ${producto.nombre} al carrito`)
    validarProductoRepetido(producto.id);
  })
});
};
export { mostrarProductos };
