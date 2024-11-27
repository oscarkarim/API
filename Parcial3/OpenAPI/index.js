const express =require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const fs = require('fs');
//const swaggerOptions = require('./swaggerOptions.json');
//swaggerOptions.apis = [path.join(__dirname, 'index.js')];
const datosReadme = fs.readFileSync(path.join(__dirname,'readme.md'),{ encoding: 'utf8', flag: 'r' });
const port = process.env.PORT || 8082;
const swaggerOptions ={
        "definition": {
          "openapi": "3.0.0",
          "info": {
            "title": "API Empleados",
            "version": "1.0.0",
          "description": datosReadme
          },
          "servers": [
            {
              "url": "http://localhost:{port}"
            }
          ]
        },
        "apis": [path.join(__dirname, 'index.js')]
}
      

 
/**
 * @swagger
 * /empleado:
 *   get:
 *     tags:
 *       - empleado
 *     description: Consultar todos los empleados
 *     responses:
 *       200:
 *         description: Rregresa un arreglo de objetos con los empleados.
 */
app.get('/empleado', async (req, res, next) => {
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));


/**
 * @swagger
 * /empleado:
 *   post:
 *     tags:
 *       - empleado
 *     description: Alta de Empleados
 *     responses:
 *       200:
 *         description: Regresa un objeto con el resultado de la operacion de alta
 */
app.post('/empleado', (req, res, next) => {
});

app.listen(port,()=>{
    console.log(`Server Express escuchando en puerto ${port}`)
})

/**
* @swagger
* components:
*   schemas:
*       usuario:
*           type: object
*           properties:
*               id_usuario:
*                   type: number
*                   example: 10
*               nombre:
*                   type: string
*                   example: Gerardo
*               ap_paterno:
*                   type: string
*                   example: Pineda
*/

/**
* @swagger
* tags:
* - name: empleado
*   description: Catalogo de empleados
*/
