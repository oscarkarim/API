const express =require('express');
const app = express();
const cors = require('cors');
//las funciones middleware se ejecutan entre la solicitud y la respuesta, si no se usa next se traba el server
//tiene acceso al req al response y lo que sigue
app.use(cors());        //middleware de terceros
app.get('/empleado',(req, res)=>{
    res.json({msg: 'Server Express contestando a peticion get'});
})



app.listen(3001,()=>{
    console.log('Server Express escuchando en puerto 3001')
})


