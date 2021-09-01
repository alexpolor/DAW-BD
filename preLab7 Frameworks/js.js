//Uso de la consola
console.log("hola");
console.info("Estamos en bloque DAW-BD");
console.warn("Advertencia");
console.error("Error!!!");
//Variables, constante y alcance
const precio = 99.99;
let tacos = 9.99; //let tiene alcance solo dentro del ambito en el que se declara, es decir, entre las llaves {}
var pizzas= 0 ; //var tiene alcance en toda la funcion donde fue declarada


//Estructura de control
if(1 === 1){
    let gorditas=3;
console.log("verdadero");
}else{
console("Falso");
}

//console.log(gorditas) truena el script porqye let murio en el if

for (let i=0;i<10;i++){
    console.log(i);
}
//console.log(i); truena el script porque let murio en el for


//alerts, prompts y confirms, escribir en el html
window.alert("Esto es una alerta de comida");
const comida = window.prompt("¿Cual es tu comida favorita");
console.info("La comida favorita del usuario es: " + comida);

const respuesta=window.confirm("¿Tienes mucha hambre?");

if (respuesta){
      console.warn("Vamos a comer " + comida + " ahora");
}   else{
      console.log("Podemos pensar cual es el mejor lugar para comer " +comida);
    }

//Funciones
function calcular_precio(numero_tacos){
    return numero_tacos * precio;
}

console.log("Tu total es de $" +calcular_precio(7));

//Funciones flecha
const calcular_precio_flecha =(numero_tacos) => numero_tacos * precio;
console.log("Tu total es de $" +calcular_precio_flecha(7));

//Arreglos
const platillos= []; //crear un lugar de memoria no se va mover, por ser referencia de memoria
platillos.push("Tinga");
platillos.push("Spaguetti");
platillos.push("Carne asada");

for (let platillo of platillos){
    console.log(platillo);
}

platillos.pop();
console.log(platillos);

//Objetos
const menu = [];
menu.push({platillo: "Carne asada:", precio: 30.00});
menu.push({platillo: "Frijoles charros", precio: 30.00});

console.log(menu);

//Escribir en el html

document.write("Hola mundo!");