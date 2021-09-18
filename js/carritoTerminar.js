const terminarCompra = new carrito();
const listaCompra = document.querySelector('#tablaListadoProductos tbody');
const secCarrito = document.getElementById('carrito');
const btnTerminarCompra = document.getElementById('btn-terminarCompraID')

contEventos();

function contEventos(){

    document.addEventListener('DOMContentLoaded', terminarCompra.leeLocalStorageCompraHtml());

    terminarCompra.total();

    btnTerminarCompra.addEventListener('click', terminarComprar)

    secCarrito.addEventListener('change', (event) => {terminarCompra.obtenerEvento(event)});

    secCarrito.addEventListener('click', (event) => {terminarCompra.eliminarItem(event)});
}

function terminarComprar(event){
    event.preventDefault();

    if(terminarCompra.obtenerProductosLS().length === 0){
        alert('No tiene productos dentro del carrito')
        window.location = "index.html";
    }else{
        alert ('Gracias por comprar con nosotros')
        terminarCompra.vaciarLocalStorage();
        window.location = "index.html";
    }
}

