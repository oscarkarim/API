const express =require('express');
const app = express();
const cors = require('cors');
//las funciones middleware se ejecutan entre la solicitud y la respuesta, si no se usa next se traba el server
//tiene acceso al req al response y lo que sigue
app.use(cors());        //middleware de terceros
app.use((req,res,next)=>{//middleware de aplicacion
    console.log(new Date());
    next();
})
app.use(express,json());//Middleware incorporado (en este caso viene incorporado en express por default)
 
app.get('/',cors(),(req, res)=>{
    res.json({msg: 'Server Express contestando a peticion get'});
    next(error);
})

app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
})

app.listen(3000,()=>{
    console.log('Server Express escuchando en puerto 3000')
})

app.use(function(err,req,res,next){ //middleware de manejo de errores
    res.status(500).send('Algo no ha ido bien');
})

