var express = require('express')
const path = require('path');
const pug = require('pug');
var cors = require('cors')
var app = express()
 
app.use(cors())
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
 
app.get('/', (req, res) => {
  console.log(req.query.nombre);
  let opciones={nombre:req.query.nombre};
  res.render('mivista',opciones);
});

 
app.listen(3001,() => {
  console.log('Server Express escuchando en puerto 3001')
})