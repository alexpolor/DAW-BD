//window.alert("Lab 5 JavaScript");


function ejer1() {

    let num1 = prompt("Elige un número: ");
    let numbase = num1;
    console.info("Elegiste el numero " + num1);
    document.write("<table> <tr><th>Número </th> <th>Potencia </th> <th>Resultado </th></tr>");
    for (let i = 1; i <= num1; i++) {
        document.write("<tr> <td>" + numbase + "</td>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + Math.pow(num1, i) + "</td> </tr>");



    }

}

function ejer2() {
    let start = new Date().getTime();

    let num1 = parseInt(Math.random() * 10);
    let num2 = parseInt(Math.random() * 10);
    let res = num1 + num2;


    let resUsuario = prompt("Da el resultado de la suma de " + num1 + " y " + num2);

    let end = new Date().getTime();
    let final = (end - start) * 0.001;


    if (res == resUsuario) {
        window.alert("Resultado Correcto\nTiempo de ejecución: " + final + " segundos");

    } else {
        window.alert("Resultado Incorrecto\nLa suma de " + num1 + "+" + num2 + "=" + res + "\nTu resultado fue:  " + resUsuario + "\nTiempo de ejecución: " + final + " segundos");

    }

}


function ejer3() {
    const arrayConteo = [];
    let numNegativos = 0;
    let ceros = 0;
    let numPositivos = 0;
    for (let i = 1; i <= 7; i++) {
        const numArreglo = window.prompt("Pon el número: " + i);
        arrayConteo.push(numArreglo);

    }

    for (let i = 0; i < arrayConteo.length; i++) {
        if (arrayConteo[i] == 0) {
            ceros++;
        } else if (arrayConteo[i] < 0) {
            numNegativos++;
        } else {
            numPositivos++;
        }
    }

    alert(arrayConteo);
    alert("Ceros: " + ceros + "\nNegativos: " + numNegativos + "\nPositivos: " + numPositivos);

}

function ejer4() {
    const matrizCal = new Array();
    let promedio = 0;
    let acum = 0;
    var filas = prompt("Da el número de filas");
    var columnas = prompt("Da el número de columnas");

    for (let i = 0; i < filas; i++) {
        acum = 0;
        matrizCal[i] = new Array();

        for (let j = 0; j < columnas; j++) {
            matrizCal[i][j] = 2;
            acum += matrizCal[i][j];


        }
        promedio = acum / filas;
        console.log("Promedio fila " + i + ": " + promedio + "\n");

    }

    for (let elemento in matrizCal) {
        console.log(elemento + "=" + matrizCal[elemento]);
    }
}

function ejer5() {
    var inv = 0;
    var numInv = prompt("Da cualquier número: ");
    var rest = numInv;
    do {
        inv = inv * 10 + (rest % 10);
        rest = Math.floor(rest / 10);
    } while (rest > 0)
    console.log("Tu número es:     " + numInv + "\nNúmero invertido: " + inv);

}

function extra() {



}