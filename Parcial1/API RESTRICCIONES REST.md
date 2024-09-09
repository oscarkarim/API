# ¿Qué es una API Rest?

La sigla API significa «interfaz de programación de aplicaciones». Una API es un conjunto de reglas que permiten a los programas informáticos interactuar entre sí. Por otra parte, un API REST es un tipo específico de interfaz de usuario, que utiliza el protocolo REST (Transferencia de estado representacional) para transferir datos.

Es una de capa de software que expone recursos para que la consuman los sistemas.

# REST (**Re**presentational **S**tate **T**ransfer)
Es una arquitectura de software que define requisitos o restricciones los cuales definen el comportamiento del intercambio de informacion de la API.
REST define un conjunto de restricciones que garantizan la coherencia de una API,por ejemplo, cómo se organizan los datos y cómo se accede a ellos. Estas restricciones hacen que las APIs REST sean fáciles de usar, porque se basan en estándares existentes (como el Protocolo de Transferencia de Hipertexto, o «http»).

## Restful
Cuando cumple todos los requisitos REST.
1.  Uniform interface (Interfaz uniforme)
2.  Client-server (Cliente-Servidor)
3.  Stateless (Sin estado)
4.  Cacheable (Caché)
5.  Layered system (Sistemas en capas)
6.  Code on demand (optional) (Código bajo demanda)

Para que una API sea considerada **RESTful** (basada en REST - Representational State Transfer), debe cumplir con una serie de restricciones o principios arquitectónicos. Las más importantes son las siguientes:

### **Arquitectura Cliente-Servidor**

-   **Separación de responsabilidades**: El cliente y el servidor deben estar claramente separados. El cliente es responsable de la interfaz de usuario y la experiencia del usuario, mientras que el servidor gestiona los datos y la lógica empresarial.
-   **Independencia de evolución**: El cliente y el servidor pueden evolucionar independientemente sin afectar el uno al otro, siempre que la interfaz permanezca estable.

### **Sin estado (Stateless)**

-   **Cada solicitud del cliente al servidor debe contener toda la información necesaria para ser entendida**. El servidor no almacena el estado del cliente entre solicitudes. Cada solicitud es independiente y autónoma.
-   No se debe confiar en sesiones almacenadas en el servidor. La autenticación, por ejemplo, debe ser enviada con cada solicitud si es requerida.

### **Caché**

-   **Las respuestas deben ser explícitamente marcadas como cacheables o no cacheables**. Si una respuesta es cacheable, el cliente puede reutilizar la respuesta sin tener que interactuar nuevamente con el servidor, mejorando así la eficiencia y reduciendo la carga del servidor.

###  **Interface uniforme**

-   **Recursos identificados por URIs**: Cada recurso en el sistema debe tener un URI único que lo identifique.
-   **Manipulación de recursos mediante representaciones**: Los clientes interactúan con los recursos a través de representaciones (generalmente en formato JSON o XML). Los clientes pueden modificar el estado de un recurso enviando una representación actualizada del mismo.
-   **Acciones definidas por métodos HTTP**:
    -   `GET`: Obtener una representación de un recurso.
    -   `POST`: Crear un nuevo recurso o enviar datos al servidor.
    -   `PUT`: Modificar un recurso existente.
    -   `DELETE`: Eliminar un recurso.
    -   `PATCH`: Modificar parcialmente un recurso.
-   **HATEOAS (Hypermedia As The Engine Of Application State)**: Los clientes deben ser capaces de navegar por la API usando enlaces proporcionados en las respuestas, sin necesitar un conocimiento previo de la estructura de la API.
- **Respuestas estandar**: que la manera en la que regresa la informacion sea estandar (un solo metodo ya sea JSON, XML, etc.)

### **Sistemas en capas**

-   La arquitectura puede estar compuesta por varias capas, como servidores proxy, servidores de autenticación, etc. El cliente no debería poder distinguir si está directamente conectado al servidor o si está interactuando con una capa intermedia.

### **Código bajo demanda (opcional)**

-   Aunque es menos común, una API REST puede permitir que el cliente ejecute código desde el servidor (por ejemplo, scripts JavaScript). Esta es una restricción opcional y no es esencial para que una API sea RESTful.

Estas restricciones son esenciales para garantizar que una API siga los principios de REST, lo que le permite ser escalable, eficiente y fácil de usar.


