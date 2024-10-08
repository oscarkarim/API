  const express =require('express');
  const app = express();

  //middleware para autenticacion basica
  const basicAuth = require('express-basic-auth')

  //usando el middleware
  //Requiere autenticacion basica aqui se ponen los usuarios y contrasenas
  var staticUserAuth = basicAuth({         
  users: {
      'Admin': '1234',
      'Oscar': 'test',
  },
  challenge: false
  })
  //si se hacen peticiones a localhost:3000/static se hara una autenticacion
  app.get('/static', staticUserAuth, function(req, res) {
    //en caso de que el login sea correcto regresa mensaje satisfactorio
    res.status(200).send('pasaste la autenticacion')
  })

  //router para manejar GET POST DELETE
  const producto= require('./productos_router.js');
  
  //se declara el uso del router
  app.use('/',producto.router);
   
  app.listen(3000,()=>{
      console.log('Server Express escuchando en puerto 3000')
  });