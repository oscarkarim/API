
# JSON Web Token (JWT)

## ¿Qué es un JSON Web Token?

Un **JSON Web Token (JWT)** es un estándar abierto (RFC 7519) que define una forma compacta y segura de transmitir información entre dos partes como un objeto JSON. Los JWT son ampliamente utilizados en autenticación de usuarios y en el intercambio seguro de información entre aplicaciones, debido a su facilidad de verificación y su capacidad de contener información de forma segura.

Los JWT se utilizan comúnmente en aplicaciones web para autenticar y autorizar usuarios. Al iniciar sesión, el servidor crea un JWT con información del usuario y lo envía al cliente. En cada solicitud posterior, el cliente envía el token de vuelta al servidor, lo que permite que el servidor verifique la identidad del usuario sin necesidad de almacenar el estado de la sesión.

## Componentes de un JWT

Un JWT se compone de tres partes principales, separadas por puntos (`.`):

1. **Header (Encabezado)**
2. **Payload (Carga útil)**
3. **Signature (Firma)**

Un JWT tiene el siguiente formato:
```
header.payload.signature
```
A continuación se explica cada una de estas partes en detalle:

### 1. Header (Encabezado)

El encabezado suele contener dos partes:
- El **algoritmo** de firma, como HMAC SHA256 o RSA.
- El **tipo** de token, que suele ser `JWT`.

El encabezado es un objeto JSON que se codifica en Base64URL. Un ejemplo de encabezado es:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### 2. Payload (Carga útil)

La carga útil contiene las **declaraciones** o **claims** del token, que representan los datos que queremos transmitir. Existen tres tipos de claims:

-   **Registered claims (Declaraciones registradas)**: Son claims predefinidos en el estándar JWT, como `iss` (emisor), `exp` (expiración) y `sub` (sujeto).
-   **Public claims (Declaraciones públicas)**: Son claims definidos libremente por el usuario, pero deben estar registrados en el registro público de la IANA para evitar conflictos.
-   **Private claims (Declaraciones privadas)**: Son claims definidos para el uso interno entre las partes que intercambian el token, y no están en el registro público.

Un ejemplo de payload sería:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

### 3. Signature (Firma)

La firma garantiza que el token no ha sido alterado. Para crear la firma, se toma el encabezado y la carga útil codificados en Base64URL y se combinan, aplicando el algoritmo de firma especificado en el encabezado. En el caso de HMAC SHA256, el proceso sería:

```scss

HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```
La firma es clave para la verificación del token, ya que permite al receptor confirmar que el emisor es confiable y que el contenido del JWT no ha sido modificado.

## Ejemplo de JWT
Ejemplo completo de un JWT (codificado en Base64URL):

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c` 

1.  **Header**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
2.  **Payload**: `eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9`
3.  **Signature**: `SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

## Conclusión

El uso de JWT permite la transferencia de datos de manera confiable y eficiente entre sistemas, sin necesidad de mantener el estado en el servidor, siendo una de las soluciones más populares para autenticación y autorización en aplicaciones web modernas.

