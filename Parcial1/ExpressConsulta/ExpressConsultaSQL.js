const express =require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

require('body-parser-xml')(bodyParser);
const app = express();
const upload = multer();
// mysql
const mysql = require('mysql2');

//las funciones middleware se ejecutan entre la solicitud y la respuesta, si no se usa next se traba el server
//tiene acceso al req al response y lo que sigue
app.use(cors());        //middleware de terceros
app.use(express.json());//Middleware incorporado (en este caso viene incorporado en express por default)
app.use(express.text());//middleware incorporado que maneja texto recibido en body
app.use(express.urlencoded({extended:true}));///middleware para procesar form
app.use(upload.none());
app.use(bodyParser.xml());//middleware para procesar xml

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'supermercado',
    port: '3308'
  });

  app.get('/',cors(),(req, res)=>{
    //console.log(req.query.id_producto)
    let consulta='';
    if(typeof(req.query.id_producto)==='undefined'){
        //si no se manda nada regresa la lista completa
        consulta=`SELECT * FROM productos;`;
    }
    else{
        //si recibe un id_producto regresa solo el producto correspondiente
        consulta=`SELECT * FROM productos WHERE Id_Producto = ${req.query.id_producto}`;
    }
    //console.log(consulta)
    connection.query(
        consulta,
        function (err, results, fields) {
            //console.log(err);
          console.log(results); // results contains rows returned by server
          if(results.length==0){
            res.json({error:"no se encontro el producto"})
          }
          res.json(results)
         // console.log(fields); // fields contains extra meta data about results, if available
        }
      );
});



app.listen(3000,()=>{
    console.log('Server Express escuchando en puerto 3000')
});


