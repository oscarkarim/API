const express =require('express');
const app = express();

//se puso el CORS en comentario para probar que con un form y un iframe se puede saltar el CORS
/* const cors = require('cors');
app.use(cors());  */

 
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

