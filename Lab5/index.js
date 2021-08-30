//window.alert("Lab 5 JavaScript");


function ejer1() {
    
    let num1 = prompt("Elige un número: ") ;
    let numbase=num1;
    console.info("Elegiste el numero " + num1);
    document.write("<table> <tr><th>Número </th> <th>Potencia </th> <th>Resultado </th></tr>");
    for(let i=1; i<=num1;i++){
        document.write("<tr> <td>"+numbase+"</td>" );
        document.write("<td>" +i+"</td>");
        document.write("<td>" +Math.pow(num1,i)+"</td> </tr>");
        
        

    }
   
    
}



