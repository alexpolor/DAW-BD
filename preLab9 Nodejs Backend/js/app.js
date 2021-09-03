//Primer programa node

console.log("Hola mundo");
console.info("Estamos usando js en una pc");

let x=5;
console.log(x);

const y=x+4;
console.log(y);

console(x);

//fs es el prototipo de js que trabaja con el sistema de archivos, fs significa file systema

const fyle_system= require('fs');
fyle_system.writeFileSync("comida.txt", "gorditas");

