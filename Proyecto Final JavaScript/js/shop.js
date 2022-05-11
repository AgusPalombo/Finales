/*===== CARRITO DE COMPRAS =====*/


// me faltaria que cada vez que reinicio la pagina el carrito se reinicie


const carrito = document.getElementById("carrito");
const prendas = document.getElementById("lista-productos");
const listaPrendas = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();


function cargarEventListeners() {
  prendas.addEventListener("click", comprarPrenda);
  carrito.addEventListener("click", eliminarPrenda);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarPrenda(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const prenda = e.target.parentElement.parentElement;
        leerDatosPrenda(prenda);
    }
}

function leerDatosPrenda(prenda){
    const infoPrenda = {
        imagen: prenda.querySelector('img').src,
        desc: prenda.querySelector("h2").textContent,
        tamano: prenda.querySelector("#size").value,
        precio: prenda.querySelector('#precio').textContent,
        id: prenda.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoPrenda);
}

function insertarCarrito(prenda) {
    const row = document.createElement('tr');
    row.innerHTML = `
       <td>
           <img src="${prenda.imagen}" width=100> 
       </td> 
       <td>${prenda.desc}</td>
       <td>${prenda.tamano}</td>
       <td>${prenda.precio}</td>
       <td>
        <a href="#" class="borrar-platillo" data-id="${prenda.id}">X</a>
       </td>
    `;
    listaPrendas.appendChild(row);
    guardarPrendaLocalStorage(prenda);
}

function eliminarPrenda(e) {
    e.preventDefault();

    let prenda,
        prendaId;
    
    if(e.target.classList.contains('borrar-platillo')) {
        e.target.parentElement.parentElement.remove();
        prenda = e.target.parentElement.parentElement;
        prendaId = prenda.querySelector('a').getAttribute('data-id');
    }
    eliminarPrendaLocalStorage(prendaId)
}

function vaciarCarrito(){
    while(listaPrendas.firstChild){
        listaPrendas.removeChild(listaPrendas.firstChild);
    }
    vaciarLocalStorage();

    return false;
}

function guardarPrendaLocalStorage(prenda) {
    let prendas;

    prendas = obtenerPrendasLocalStorage();
    prendas.push(prenda);

    localStorage.setItem('prendas', JSON.stringify(prendas));
}

function obtenerPrendasLocalStorage() {
    let prendasLS;

    if(localStorage.getItem('prendas') === null) {
        prendasLS = [];
    }else {
        prendasLS = JSON.parse(localStorage.getItem('prendas'));
    }
    return prendasLS;
}

function leerLocalStorage() {
    let prendasprendaLS;

    prendasprendaLS = obtenerPrendasLocalStorage();

    prendasprendaLS.forEach(function(prenda){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${prenda.imagen}" width=100>
            </td>
            <td>${prenda.titulo}</td>
            <td>${prenda.precio}</td>
            <td>
                <a href="#" class="borrar-prenda" data-id="${prenda.id}">X</a>
            </td>
        `;
        listaPrendas.appendChild(row);
        let suma = 0
        suma = suma + prenda.precio
    });
}

function eliminarPrendaLocalStorage(platillo) {
    let prendasLS;
    prendasLS = obtenerPrendasLocalStorage();

    prendasLS.forEach(function(prendaLS, index){
        if(prendaLS.id === platillo) {
            prendasLS.splice(index, 1);
        }
    });

    localStorage.setItem('prendas', JSON.stringify(prendasLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}

/*===== REALIZAR COMPRA =====*/

 const comprar = document.getElementById("compra");
comprar.addEventListener("click",()=>{
//         // if (listaPrendas = null) NO SE SI EL RAZONAMIENTO ES CORRECTO PARA DETERMINAR EL MENSAJE A MOSTRAR SEGUN SI ESTA LLENO O VACIO EL CARRITO
//         //     swal("Error", "No hay prendas en el carrito", "error");
//         // else    
//         swal("Muchas gracias!", "Compra realizada con exito", "success");
        vaciarCarrito();
        document.location.replace("pagos.html")
})


