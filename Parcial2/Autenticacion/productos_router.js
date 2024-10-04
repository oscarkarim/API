const express =require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
const app = express();
const upload = multer();
// mysql
const mysql = require('mysql2');
 // Create the connection to database
 const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'supermercado',
  port: '3308'
});
  //las funciones middleware se ejecutan entre la solicitud y la respuesta, si no se usa next se traba el server
  //tiene acceso al req al response y lo que sigue
  app.use(cors());        //middleware de terceros
  app.use(express.json());//Middleware incorporado (en este caso viene incorporado en express por default)
  app.use(express.text());//middleware incorporado que maneja texto recibido en body
  app.use(express.urlencoded({extended:true}));///middleware para procesar form
  app.use(upload.none());
  app.use(bodyParser.xml());//middleware para procesar xml
  

router.get('/',cors(),(req, res)=>{
    let consulta='';
    consulta = (typeof(req.query.id_producto) === 'undefined' || req.query.id_producto === '') 
    ? `SELECT * FROM productos;` 
    : `SELECT * FROM productos WHERE Id_Producto = ${req.query.id_producto};`;
    connection.query(
        consulta,
        function (err, results, fields) {
          if (err) {
            res.json(err)
            //next err invoca la funcion manejadora de errores
            /* next(err) */
          }  
          console.log(results); // results contains rows returned by server
          if(results.length==0){
            res.json({error:"no se encontro el producto"})
          }
          res.json(results)
         // console.log(fields); // fields contains extra meta data about results, if available
        }
      );
    });

//post espera un json en el body
//json ejemplo
/* {
  "id_producto": 102,
  "marca": "Samsung",
  "modelo": "Galaxy S21",
  "precio": 799,
  "color": "Negro",
  "categoria": "Smartphones"
  }*/

router.post('/', cors(), (req, res) => {
  const { id_producto, marca, modelo, precio, color, categoria } = req.body;

  // valida que esten todos los campos
  if (!id_producto || !marca || !modelo || !precio || !color || !categoria) {
      return res.status(400).json({ error: "por favor llena todos los campos" });
  }

  // query
  const insertQuery = `
      INSERT INTO productos (Id_Producto, Marca, Modelo, Precio, Color, Categoria)
      VALUES (?, ?, ?, ?, ?, ?)
  `;

  // ejecutar query
  connection.query(insertQuery, [id_producto, marca, modelo, precio, color, categoria], (err, results) => {
      if (err) {
          return res.status(500).json(err);
      }

      res.json({
          message: "Producto agregado",
          productId: results.insertId
      });
  });
});

//delete espera un json en el body
//json ejemplo
/* {
  "id_producto": 102
  }*/
router.delete('/', (req, res) => {
  const { id_producto } = req.body;

  // revisar si se mando el id
  if (!id_producto) {
      return res.status(400).json({ error: "se requiere el ID de producto" });
  }

  // query
  const deleteQuery = `DELETE FROM productos WHERE Id_Producto = ${id_producto}`;

  // se ejecuta la query
  connection.query(deleteQuery, (err, results) => {
      if (err) {
          return res.status(500).json(err);
      }

      // revisar si hubo filas afectadas
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: "No se encontro el producto" });
      }

      res.json({
          message: "Producto eliminado"
      });
  });
});
module.exports.router=router;