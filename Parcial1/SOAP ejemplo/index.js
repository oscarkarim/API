'use strict';

var http = require('http');
var soap = require('soap');
var server;


var myService = {
  StockQuoteService: {
    StockQuotePort: {
      GetLastTradePrice: function(args) {
        //dependiendo del valor de tickerSymbol regresa un dato diferente
        switch (args.tickerSymbol) {
          case 'AAPL':
            return { price: 150.25 }; 
          case 'MSFT':
            return { price: 299.75 }; 
          case 'GOOGL':
            return { price: 2800.15 }; 
          case 'trigger error':
            throw new Error('triggered server error'); // Error 
          default:
            return { price: 100.00 }; // valor default en caso de que no se reconozca el dato.
        }
      }
    }
  }
};

// Definir la ruta al archivo WSDL (Lenguaje de Descripción de Servicios Web)
// WSDL define el contrato del servicio, incluyendo los métodos y mensajes usados en el servicio web SOAP.
const wsdlPath = 'Parcial1\\SOAP ejemplo\\stockquote.wsdl';

// Leer el contenido del archivo WSDL en una variable de cadena
// La variable 'xml' ahora contiene la definición XML del servicio SOAP.
var xml = require('fs').readFileSync(wsdlPath, 'utf8');

// Crear un servidor HTTP que escuche las solicitudes entrantes.
server = http.createServer(function(request, response) {
  response.end('404: Not Found: ' + request.url);
});

// Hacer que el servidor escuche en el puerto 8000, de modo que pueda empezar a aceptar solicitudes.
server.listen(8000);

// Configurar el servicio SOAP en el servidor HTTP existente.
// 'soap.listen' vincula el servicio SOAP al servidor en el punto final '/stockquote'.
// 'myService' se refiere a la implementación del servicio SOAP.
// 'xml' es la definición WSDL que describe la estructura del servicio.
soap.listen(server, '/stockquote', myService, xml);

