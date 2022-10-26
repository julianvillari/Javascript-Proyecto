import { eliminarProductoCarrito } from "./accionesCarrito.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

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