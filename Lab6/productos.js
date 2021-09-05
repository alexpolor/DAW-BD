const formularioPedidos = document.getElementById("form");
const pagar = document.getElementById("formPagar");
const pedidoMillion = document.getElementById('stockOneMillion');
const pedidoBoss = document.getElementById('stockBossIntense');
const pedidoInvictus = document.getElementById('stockInvictus');
formularioPedidos.addEventListener("submit", pruebaStock);
pagar.addEventListener("submit", pruebaBotonPagar);



function Perfume(id, nombre, marca, volumen, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.volumen = volumen;
    this.precio = precio;
    this.stock = stock;
};

var oneMillion = new Perfume(1, 'One Million', 'Paco Rabbane', 100, 1340, 5);
var bossIntense = new Perfume(2, 'Bottled Intense', 'Hugo Boss', 100, 1299, 5);
var invictus = new Perfume(3, 'Invictus', 'Paco Rabbane', 100, 1420, 5);

document.getElementById("oneDescripcion").innerHTML = "Nombre: " + oneMillion.nombre + "<br>Marca: " + oneMillion.marca + "<br>Volumen: " + oneMillion.volumen + "ml<br>Precio: $" + oneMillion.precio.toLocaleString('en-US') + "<br>Existencia: " + oneMillion.stock;
document.getElementById("bossDescripcion").innerHTML = "Nombre: " + bossIntense.nombre + "<br>Marca: " + bossIntense.marca + "<br>Volumen: " + bossIntense.volumen + "ml<br>Precio: $" + bossIntense.precio.toLocaleString('en-US') + "<br>Existencia: " + bossIntense.stock;
document.getElementById("invictusDescripcion").innerHTML = "Nombre: " + invictus.nombre + "<br>Marca: " + invictus.marca + "<br>Volumen: " + invictus.volumen + "ml<br>Precio: $" + invictus.precio.toLocaleString('en-US') + "<br>Existencia: " + invictus.stock;

//Siempre poner event
function pruebaStock(event) {
    //Evita que refresque la pagina
    event.preventDefault();
    if (existencias() == false) {
        alert("Verifique pedido, stock insufuciente");
    } else {
        calculoTotal(oneMillion.precio, bossIntense.precio, invictus.precio);
    }
}

function existencias() {
    if (pedidoMillion.value > oneMillion.stock || pedidoBoss.value > bossIntense.stock || pedidoInvictus.value > invictus.stock) {
        return false;
    }
}

function calculoTotal(a, b, c) {
    var iva = 0;
    var subTotal = 0;
    var total = 0;
    var unidades;
    let uniMillion = pedidoMillion.value;
    let uniBoss = pedidoBoss.value;
    let uniInvictus = pedidoInvictus.value;

    unidades = uniMillion + uniBoss + uniInvictus;
    subTotal = (a * pedidoMillion.value) + (b * pedidoBoss.value) + (c * pedidoInvictus.value);
    iva = subTotal * 0.16;
    total = subTotal + iva;

    document.getElementById("descripcion").innerHTML = "Subtotal------->$" + subTotal.toLocaleString('en-US') + "<br>IVA----------------->$" + iva.toLocaleString('en-US') + "<br>Total------------->$" + total.toLocaleString('en-US');


}


function pruebaBotonPagar(event) {
    
   alert("Gracias por tu compra");

}