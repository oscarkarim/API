const express =require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const swaggerOptions = require('./swaggerOptions.json');
swaggerOptions.apis = [path.join(__dirname, 'index.js')];

const port = process.env.PORT || 8082;


 
/**
 * @swagger
 * /empleado:
 *   get:
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

