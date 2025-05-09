Versiones utilizadas

NestJS: 11.0.1

Node.js: 20.10.0

PostgreSQL: 13

Docker: 28.0.4

Docker Compose: 2.34.0

Clonar el repositorio y preparar entorno

Clonar el repositorio:

git clone https://github.com/HansFonfach/prueba-borealis
cd prueba-borealis

Crear archivo .env a partir de .env.example:

cp .env.example .env

Contenido de .env.example:

Este archivo contiene variables necesarias para la base de datos

Levantar el entorno con Docker

Asegúrate de tener Docker y Docker Compose instalados.

Ejecutar el siguiente comando:

docker-compose up --build

Este comando construye y levanta los contenedores de la app y de PostgreSQL. Todo corre dentro de Docker, por lo que no necesitas instalar nada extra.

Ejecutar seeds

(Si tu proyecto incluye migraciones manuales)


docker-compose exec app npm run seed:run

Testear endpoint con Postman

Abrir Postman y crear una nueva petición:

Método: GET

URL: http://localhost:3000/categoria/1

Puedes probar con 1,2,3,4, etc.

Enviar la solicitud.

Si todo está correcto, deberías recibir una respuesta JSON con los datos de la categoría con ID 1.

No se requieren headers especiales para esta app.

Testear con cURL

Abre una terminal y escribe:

curl http://localhost:3000/categoria/1

Esto debería devolver una respuesta como:

{
  "id": 1,
  "nombre": "Categoria ejemplo"
}