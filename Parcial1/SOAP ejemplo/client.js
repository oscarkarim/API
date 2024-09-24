'use strict';

var soap = require('soap');

// URL del servicio WSDL, que describe el servicio web SOAP.
var url = 'http://127.0.0.1:8000/stockquote?wsdl';

// URL del punto de acceso del servicio SOAP (donde están disponibles los métodos del servicio).
var endpoint_url = 'http://127.0.0.1:8000/stockquote';

// Definir los argumentos que se enviarán en la solicitud SOAP.
var args = {
  tickerSymbol: 'MSFT'
};

// Crear un cliente SOAP usando la URL WSDL.
// Una vez creado, se ejecuta el callback 'function(err, client)' para interactuar con el servicio.
soap.createClient(url, function(err, client) {
  // Usar el cliente SOAP para invocar el método 'GetLastTradePrice' en el servicio, pasando los argumentos (args).
  client.GetLastTradePrice(args, function(err, result) {
    console.log(result);
  });
}, endpoint_url);
