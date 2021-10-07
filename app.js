const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});



app.use((request,response, next) => {
    console.log("Primer Middleware");
    next ();
});

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta/nombres', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta/nombres"'); 
});

app.use('/ruta/apellidos', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta/apellidos"'); 
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});


app.listen(3000);