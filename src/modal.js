import { obtenerCarritoStorage } from "./storage.js";
import { eliminarProductoCarrito, vaciar, pintarCarrito } from "./accionesCarrito.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const vaciarCarrito = document.getElementById('btn-vaciar')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

vaciarCarrito.addEventListener('click', () => {
    const carrito = obtenerCarritoStorage()

    const alertFire1 = () => {
        Swal.fire({
            title: 'Estas seguro que deseas eliminar todos los productos de tu carrito?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, estoy seguro'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Se han eliminado todos los productos de tu carrito',
                )
                vaciar(carrito)
            }
        })
    }
    const alertFire2 = () => {
        Swal.fire({
            title: 'No hay productos en el carrito',
            text: "",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
    }
    carrito.length >= 1 ? alertFire1() : alertFire2()
})


modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()

    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(e.target.value)
    }
})


modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();


    // AGREGUE SWEET ALERT EN EL MODAL

    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: 'Desea eliminar el prodcuto?',
            text: 'El producto será eliminado del carrito!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoCarrito(e.target.value)
                Swal.fire(
                    'Eliminado!',
                    'El producto ha sido eliminado correctamente.',
                    'success'
                )
            }
        })

    };
});