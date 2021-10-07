const express = require('express');

const router = express.Router();

router.get('/ruta', (request, response, next) => {
    app.get('/menu/add', (request, response, next) => {
        let respuesta='<head><meta charset="UTF-8"></head>';
            response+='<h1>Agregar platillo al menú</h1>';
            response+='<form action="/menu/add" method="POST">';
            response+='<label for="nombre">Nombre de platillo: </label>';
            response+='<input type="text" id="nombre" name="nombre" placeholder="tacos" required>';
            response+='<br/>';
            response+='<br/>';
            response+='<label for="descripcion">Descripción del platillo: </label>';
            response+='<input type="text" id="descripcion" name="descripcion" placeholder="Este platillo es delicioso, lleva...">';
            response+='<br/>';
            response+='<br/>';
            response+='<input type="submit" id="enviar" name="enviar" value="Enviar">';
            response+='</form>';
            response.send(respuesta);
    });
});

module.exports = router;