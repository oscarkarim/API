  const express =require('express');
  const cors = require('cors');
  const multer = require('multer');
  const bodyParser = require('body-parser');
  require('body-parser-xml')(bodyParser);
  const app = express();
  const upload = multer();
  
  //router para manejar GET POST DELETE
  const producto= require('./productos_router.js');


  //las funciones middleware se ejecutan entre la solicitud y la respuesta, si no se usa next se traba el server
  //tiene acceso al req al response y lo que sigue
  app.use(cors());        //middleware de terceros
  app.use(express.json());//Middleware incorporado (en este caso viene incorporado en express por default)
  app.use(express.text());//middleware incorporado que maneja texto recibido en body
  app.use(express.urlencoded({extended:true}));///middleware para procesar form
  app.use(upload.none());
  app.use(bodyParser.xml());//middleware para procesar xml
  


  //se declara el uso del router
  app.use('/',producto.router);
 
  
    
  
  app.listen(3000,()=>{
      console.log('Server Express escuchando en puerto 3000')
  });
  
  //funcion manejadora de errores
  /* app.use((err,req,res,next)=>{
    
  }) */
  