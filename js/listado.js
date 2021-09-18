const constCarrito = new carrito();
const carritoCompra = document.getElementById('listadoProducto');
const producto = document.getElementById('contenedorCards');
const listadoProducto = document.querySelector('#listaCarrito tbody');
const btnLimpiarCarrito = document.getElementById('btn-limpiarCarrito');
const btnTerminarCompra = document.getElementById('btn-terminarCompra');

contEventos();

function contEventos(){
    producto.addEventListener('click',(event) => {constCarrito.comprarProducto(event)});

    btnLimpiarCarrito.addEventListener('click',(event) => {constCarrito.limpiarCarrito(event)});

    document.addEventListener('DOMContentLoaded', constCarrito.leeLocalStorage());

    btnTerminarCompra.addEventListener('click', (event) => {constCarrito.terminarCompra(event)})

    carritoCompra.addEventListener('click',(event) => {constCarrito.eliminarItem(event)});

}
