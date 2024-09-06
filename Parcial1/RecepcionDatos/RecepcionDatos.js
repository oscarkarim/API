const express =require('express');
const app = express();
const cors = require('cors');
//las funciones middleware se ejecutan entre la solicitud y la respuesta, si no se usa next se traba el server
//tiene acceso al req al response y lo que sigue
app.use(cors());        //middleware de terceros
app.use(express.json());//Middleware incorporado (en este caso viene incorporado en express por default)
app.use(express.text());//middleware incorporado que maneja texto recibido en body
app.get('/clientes/.id',cors(),(req, res)=>{
    Console.log(req.params)
    res.json({msg: 'Server Express contestando a peticion get'});
})

app.post('/clientes',(req,res)=>{
    Console.log(req.query)
    res.json('Server Express contestando a peticion post')
})
app.put('/clientes',cors(),(req, res)=>{
    console.log(req.body)
    res.json({msg: 'Server Express contestando a peticion get'});
})



app.listen(3000,()=>{
    console.log('Server Express escuchando en puerto 3000')
})


