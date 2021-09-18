class carrito{

    //añade producto
    comprarProducto(event){
        event.preventDefault();
        if(event.target.classList.contains('btn-anadir')){
            const producto = event.target.parentElement.parentElement;
            this.datosDeProducto(producto);
            
        }
    }

    //datos del producto
    datosDeProducto(producto){
        const infoproducto = {
            imagen : producto.querySelector('img').src,
            nombre : producto.querySelector('.nombreJuego').textContent,
            precio : producto.querySelector('.precioJuego').textContent,
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad : 1
        }

        //revisa que no se repita un item y envia un msj en caso de que suceda
        let productosLS;
        productosLS = this.obtenerProductosLS();
        productosLS.forEach(function(productoLS){
            if(productoLS.id === infoproducto.id){
                productosLS = productoLS.id
            }
        });

        if(productosLS === infoproducto.id){
            alert('Producto ya agregado')
        }else{
            this.insertarCarrito(infoproducto);
        }

    }

    insertarCarrito(producto){
        const insertarEnCarrito = document.createElement('tr');
        insertarEnCarrito.innerHTML = `
            <td class="imgCarritoIndex">
                <img src="${producto.imagen}" width=100>
            </td>
            <td class="nombreCarritoIndex">${producto.nombre}</td>
            <td class="precioCarritoIndex">${producto.precio}</td>
            <a href="#" class="btn-borra" data-id="${producto.id}">Borrar</a>
        `;
    
        listadoProducto.appendChild(insertarEnCarrito);

        this.guardarProductosLS(producto);
    
    }

    //eliminar item del carrito
    eliminarItem(event){
       event.preventDefault();
       let productoD, productoID;
       if(event.target.classList.contains('btn-borra')){
           event.target.parentElement.parentElement.remove();
           productoD = event.target.parentElement.parentElement;
           productoID = producto.querySelector('a').getAttribute('data-id') 
       }

       this.eliminarItemLS();
       this.total();
    }

    // limpia todo el carrito
    limpiarCarrito(event){
        event.preventDefault();
        while(listadoProducto.firstChild){
            listadoProducto.removeChild(listadoProducto.firstChild);
        }

        this.vaciarLocalStorage();

        return false;
    }

    //guarda los productos en el local storage
    guardarProductosLS(producto){
        let productos;
        productos = this.obtenerProductosLS();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos))
    }

    //verifica si tiene algo en el storage
    obtenerProductosLS(){
        let productoLS;
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        }
        else{
            productoLS = JSON.parse(localStorage.getItem('productos'))
        }
        return productoLS;
    }

    //elimina items del local storage
    eliminarItemLS(){
        let productosLS;
        productosLS = this.obtenerProductosLS();
        productosLS.forEach(function(productoLS, index){
            if(productoLS.id === productoLS){
                productosLS.splice(index, 1);
            }
        });

        localStorage.setItem('productos',JSON.stringify(productosLS));
    }


    //muestra los items guardados en el local storage
    leeLocalStorage(){
        let productoLS;
        productoLS = this.obtenerProductosLS();
        productoLS.forEach(function(producto) {
            const insertarEnCarrito = document.createElement('tr');
                insertarEnCarrito.innerHTML = `
                    <td class="imgCarritoIndex">
                        <img src="${producto.imagen}" width=100>
                    </td>
                    <td class="nombreCarritoIndex">${producto.nombre}</td>
                    <td class="precioCarritoIndex">${producto.precio}</td>
                    <a href="#" class="btn-borra" data-id="${producto.id}">Borrar</a>
                `;

                listadoProducto.appendChild(insertarEnCarrito);
        });
    }

    //nos lleva al html donde se terminara de comprar los articulos
    terminarCompra(event){
        event.preventDefault();
        if(this.obtenerProductosLS().length === 0){
            alert('No tienes articulos en el carrito')
        }else{
            location.href = "compra.html";
        }
    }

    //crea la card dentro de compra.html
    leeLocalStorageCompraHtml(){
        let productoLS;
        productoLS = this.obtenerProductosLS();
        productoLS.forEach(function(producto) {
            const insertarEnCarrito = document.createElement('tr');
                insertarEnCarrito.innerHTML = `
                    <td class="imgCarritoIndex">
                        <img src="${producto.imagen}" width=100>
                    </td>
                    <td class="nombreCarritoComprar">${producto.nombre}</td>
                    <td class="precioCarritoComprar">${producto.precio}</td>
                    <td><input type="number" class="cantidadCarritoComprar" min="1" value="${producto.cantidad}"</input></td>
                    <td id="precioPorItem">${producto.precio * producto.cantidad}</td>
                    <a href="#" class="btn-borra" data-id="${producto.id}">Borrar</a>
                `;

                listaCompra.appendChild(insertarEnCarrito);
        });
    }

    //elimina todo el local storage
    vaciarLocalStorage(){
        localStorage.clear();
    }

    //calcula el total de los productos
    total(){
        let productoLS;
        let total = 0;
        productoLS = this.obtenerProductosLS();
        for(let i = 0; i < productoLS.length; i++){
            let precioTotal = Number(productoLS[i].precio * productoLS[i].cantidad);
            total = total + precioTotal;
        }

        document.getElementById('Itotal').value = "$" + total.toFixed(2);

    }
    
    obtenerEvento(event) {
        event.preventDefault();
        let id, cantidad, producto, productosLS;
        if (event.target.classList.contains('cantidadCarritoComprar')) {
            producto = event.target.parentElement.parentElement;
            id = producto.querySelector('a').getAttribute('data-id');
            cantidad = producto.querySelector('input').value;
            let actualizarPrecios = document.querySelectorAll('#precioPorItem');
            productosLS = this.obtenerProductosLS();
            productosLS.forEach(function (productoLS, index) {
                if (productoLS.id === id) {
                    productoLS.cantidad = cantidad;                    
                    actualizarPrecios[index].innerHTML = Number(cantidad * productosLS[index].precio);
                }    
            });
            localStorage.setItem('productos', JSON.stringify(productosLS));
            
        }
        else {
            console.log("click afuera");
        }
    }
}



    

