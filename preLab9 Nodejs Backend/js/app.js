//Primer programa con node

console.log("Hola mundo!!");
console.info("Estamos usando js en una pc");

let x=5;
//console.log(x);

const y=x+4;
//console.log(y);

//fs es el prototipo de js que trabaja con el sistema de archivos. fs significa file system.
const file_system = require('fs');

file_system.writeFileSync("comida.txt","gorditas");

//Código asíncrono

const arreglo = [5000,3,4,300,2000,1500,200,34,12,400,100]

for(let item of arreglo){
    setTimeout( () =>{
        console.log(item);
    },item);
}

//Servidor web
const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write('<h1>Hola mundo! Esta pagina no existe</h1>');
    response.statusCode = 404;
    response.end();
});

//Dice a que puerto escucho
server.listen(3000);

