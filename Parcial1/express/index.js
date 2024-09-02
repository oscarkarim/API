const express =require('express');
const app = express();
const cors = require('cors');



// Usar cors
app.use(cors()); 

 
app.get('/', function (req, res, next) {
    res.json({msg: 'Server Express contestando a peticion get'})
  })
/* app.get('/',(req,res)=>{
    res.send('')
})
 */
app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
})

app.listen(3000,()=>{
    console.log('Server Express escuchando en puerto 3000')
})

