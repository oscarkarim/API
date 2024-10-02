const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

try {
  // Lee el archivo YAML
  const archivo = fs.readFileSync(path.join(__dirname,"/Ejemplo.yaml"), 'utf8');
  
  // Parsea el contenido YAML
  const datos = yaml.parse(archivo);
  
  // Imprime los datos leídos del archivo
  console.log(typeof datos);
  console.table(datos);
} catch (e) {
  console.error(e);
}
