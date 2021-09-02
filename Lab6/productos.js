const pedidoMillion = document.getElementById('stockOneMillion');
const pedidoBoss = document.getElementById('stockBossIntense');
const pedidoInvictus = document.getElementById('stockInvictus');


function Perfume(id,nombre,marca,volumen, precio,stock) {
    this. id= id;
    this.nombre = nombre;
    this.marca = marca;
    this.volumen = volumen;
    this.precio = precio;
    this.stock = stock;
};

var oneMillion= new Perfume(1,'One Million','Paco Rabbane',100,1340,10);
var bossIntense= new Perfume(2,'Bottled Intense','Hugo Boss',100,1299,10);
var invictus= new Perfume(3,'Invictus','Paco Rabbane',100,1420,10);

document.getElementById("oneDescripcion").innerHTML = "Nombre: " + oneMillion.nombre + "<br>Marca: " + oneMillion.marca + "<br>Precio: $" + oneMillion.precio.toLocaleString('en-US');
document.getElementById("bossDescripcion").innerHTML = "Nombre: " + bossIntense.nombre + "<br>Marca: " + bossIntense.marca + "<br>Precio: $" + bossIntense.precio.toLocaleString('en-US');
document.getElementById("invictusDescripcion").innerHTML = "Nombre: " + invictus.nombre + "<br>Marca: " + invictus.marca + "<br>Precio: $" + invictus.precio.toLocaleString('en-US');

function pruebaStock (){
prueba= oneMillion.stock - pedidoBoss;
console.log(prueba);
}