//Funcion promedio de arreglos de número: Ejercicio 1
function promedio(calificaciones) {
    var promedio = 0;

    for (let i = 0; i < calificaciones.length; i++) {
        promedio = promedio + calificaciones[i];
    }
    promedio = promedio / calificaciones.length;
    return promedio;
}

//Ejercicio 2 array en archivo de texto
function texto(arrayTexto){
    const file_system = require('fs');

    file_system.writeFileSync("lab9.txt",arrayTexto);
    return arrayTexto;
}

//Ejercicio 3: Calculo de Salario
function salarioNeto(sueldo){
    var tasaPromedio=0.132;
    var sueldoFinal=0;
    sueldoFinal=sueldo-(sueldo*tasaPromedio);
    return sueldoFinal;
}



//Servidor web
const http = require('http');

//Poner el array para el Ejercicio 1
const arrayCalificaciones=[100,100,50,60,70];
//Poner String para Ejercicio 2
const palabras='hola amigos de mexico';




const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<head><meta charset="UTF-8"></head>');
    response.write('<h1>Lab 9</h1>');
    //Ejercicio 1
    response.write('<h2>Ejercicio 1: Array y promedio</h2>');
    response.write("Tus calficaciones son: " + arrayCalificaciones);
    response.write("<br>Tu promedio es: " + promedio(arrayCalificaciones));
    console.log("Tus calficaciones son: " + arrayCalificaciones);
    console.log("Tu promedio es: " + promedio(arrayCalificaciones));
    //Ejercicio 2
    response.write('<h2>Ejercicio 2: String en archivo de texto</h2>');
    texto(palabras);
    response.write("Tu texto es: " + texto(palabras)+ ", revisa lab9.txt");
    //Ejercicio 3: Libre
    response.write('<h2>Ejercicio 3: Calcular sueldo Neto</h2>');
    response.write("<br>Tu sueldo final es: $" + salarioNeto(10000));

    //Response status
    response.statusCode = 404;
    response.end();
});

//Dice a que puerto escucho
server.listen(3000);