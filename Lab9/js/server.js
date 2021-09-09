//Servidor web
var http = require('http');
var fs = require('fs');


fs.readFile('../../Lab7/indexLab7.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    server = http.createServer( (request, response) => { 
        //200 Codigo de respuesta Satisfactorio 
        response.writeHeader(200,{"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000); //Puerto al que se escucha
});

