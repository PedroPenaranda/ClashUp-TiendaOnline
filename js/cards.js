const articulos = [{nombre: "Assasins Creed Valhalla", 
                    precio: 9000, 
                    imagenJ: './imagenes/juegosPs4/assassinsCreedValhalla-PS4.jpg',
                    dataId: 1},

                   {nombre: "OutRiders", 
                    precio: 8000,
                    imagenJ: './imagenes/juegosPs4/outriders-PS4.jpg',
                    dataId: 2},

                   {nombre: "Uncharted 4 El Desenlace",
                    precio: 7000,
                    imagenJ: './imagenes/juegosPs4/uncharted4-elDesenlace-PS4.jpg',
                    dataId: 3},

                   {nombre: "NBA 2K 20", 
                    precio: 6000,
                    imagenJ: './imagenes/juegosXbox/NBA2K2020-xboxone.jpg',
                    dataId: 4},

                   {nombre: "Resident Evil 8 Village",
                    precio: 5000,
                    imagenJ: './imagenes/juegosXbox/residentevil8-village-xboxone.jpg',
                    dataId: 5},

                   {nombre: "Titan Fall 2",
                    precio: 4000, 
                    imagenJ: './imagenes/juegosXbox/titanfall2-xboxone.jpg',
                    dataId: 6},

                   {nombre: "Hyrule Warriors",
                    precio: 3000,
                    imagenJ: './imagenes/juegosNintendoSwitch/hyruleWarriors-nintendoSwitch.jpg',
                    dataId: 7},

                   {nombre: "Mario Kart 8 Deluxe", 
                    precio: 2000,
                    imagenJ: './imagenes/juegosNintendoSwitch/marioKart8-nintendoSwitch.jpg',
                    dataId: 8},

                   {nombre: "Zelda", 
                    precio: 1000,
                    imagenJ: './imagenes/juegosNintendoSwitch/Zelda-nintendoSwitch.jpg',
                    dataId: 9}];  

const articulosJson = JSON.stringify(articulos);

localStorage.setItem('Articulos', articulosJson);

let articulosParse = JSON.parse(localStorage.getItem('Articulos'));

for (const articulo of articulos) {
    let contCard = document.createElement("div");

    contCard.innerHTML = `<div class="card">
                            <div class="card-txt">
                                <img src="${articulo.imagenJ}" class="imgJuego" alt="imgJuegos"></img>
                                <h4 class="nombreJuego">${articulo.nombre}</h4>
                                <h4 class="precioJuego">${articulo.precio}</h4>
                                <button class="btn-anadir btn__ps4--comprar" data-id="${articulo.dataId}">Añadir al carrito</button>
                            </div>
                          </div>
    `;
    document.getElementById("contenedorCards").appendChild(contCard);
}