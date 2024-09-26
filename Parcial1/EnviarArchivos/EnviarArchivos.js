const express =require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());        //middleware de terceros

app.get('/sendFile',(req, res)=>{
    let archivo=path.join(__dirname,'/imagenes/honda_civic.jpg');
    res.sendFile(archivo);
})

app.get('/download',(req,res)=>{
    let archivo=path.join(__dirname,'/imagenes/honda_civic.jpg');
    res.download(archivo);
})
app.get('/attachment',(req, res)=>{
    let archivo=path.join(__dirname,'/imagenes/honda_civic.jpg');
    res.attachment(archivo);
    res.sendFile(archivo);
})



app.listen(3000,()=>{
    console.log('Server Express escuchando en puerto 3000')
})


