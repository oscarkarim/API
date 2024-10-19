const https = require('https');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const options = {
    key: fs.readFileSync(path.join(__dirname, 'Certificado/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'Certificado/cert.pem'))
};

app.get('/', (req, res) => {
    res.json({mensaje: "Servidor express respondiendo"});
})

https.createServer(options, app).listen(3000, () => {
    console.log("Servidor express escuchando en puerto 3000");
})