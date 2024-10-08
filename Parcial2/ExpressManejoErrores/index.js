var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/', (req, res) => {
  if (tru){
    res.json({mensaje: 'Server Express contestando a peticion get'})
  }else {
    res.json({mensaje: 'Server Express contestando a peticion get'})
    next(err);
  }
});
app.use((err, req, res, next) => {
  console.log(err); 
  res.status(501);
  res.json({error:err.message});
})
 
app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})