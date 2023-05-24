# API-rest

## Enunciado de proyecto

Este será tu primer proyecto de Node, Express y MongoDB en Rock{theCode}, ¡prepárate para crear tu primer servidor!

Para preparar este proyecto, sigue los siguientes pasos:

- Crea una carpeta para el proyecto.
- Navega a la carpeta y lanza `npm init -y`.
- Instala las dos dependencias principales con `npm i express mongoose`.
- Asegúrate de tener Mongo preparado ya sea instalado o con Docker.
- Prepara tu server para escuchar en el puerto 4001 tal y como hemos explicado en clase y has visto en los videos del contenido.
- Crea un archivo .gitignore en la raíz de tu proyecto y añade dentro el texto `node_modules` para no subir la carpeta de módulos instalados a Github.
- Lanza ahora `git init` e inicializa tu repositorio. Crea un repositorio en Github y haz commit/push del contenido.

En este proyecto tendrás que crear un servidor de **Express** que trabaje con **MongoDB** a través de mongoose. Conectarás tu proyecto cuando el servidor se inicialice.

Tendrás que definir un modelo de datos, del tipo que prefieras, ya que va a ser tu primera API y queremos que la crees de lo que más te guste (coches, ropa, videojuegos, libros…). Simplemente necesitas cumplir una serie de requisitos de aceptación que usaremos para evaluarlo.

### Criterio de aceptación

Estos criterios son generales y estarán referidos al servidor y base de datos. Cumplirlos es obligatorio para considerar el proyecto completado y que podamos así certificarte como Backend Developer una vez acabes todos los proyectos.

- [ ] El servidor arranca en el puerto 4001 cuando lanzo el comando `npm run start`.
- [ ] El servidor se conecta con una base de datos MongoDB en mi equipo local que corre en el puerto 27017.
- [ ] En el README del proyecto están definidos los endpoints que tengo a mi disposición.
  - [ ] Hay un endpoint GET que me permite traer todos los documentos de un tipo de colección.
  - [ ] Hay un endpoint GET que me permite traer un solo elemento por su id de una colección.
  - [ ] Hay un endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.
  - [ ] Hay un endpoint PUT que me permite crear editar un elemento por su id en una colección.
  - [ ] Hay un endpoint DELETE que me permite borrar un elemento por su id en una colección.
- [ ] El modelo de datos de MongoDB es un objeto con **al menos cuatro claves distintas**, aquí un ejemplo de algo esperable:

```jsx
const document = {
  _id: "id_del_documento",
  name: "Pepe",
  surname: "Rocker",
  job: "Full Stack",
  studies: "Rock{theCode}",
};
```

- [ ] El **servidor no se rompe si pido una URL no existente**, es decir, dispone de un middleware para capturar errores 404 o rutas no encontradas.
- [ ] Los **códigos de red son correctos** cuando hago peticiones (200 y 201 para objetos creados).

ENDPOINTS:

- Hacemos POST (http://localhost:4001/api/books) para crear uno a uno los libros en la base de datos, siguiendo el modelo de datos que hemos hecho anteriormente, pasando los datos en el req.body:

{
"title": "Drácula",
"author": "Bram Stoker",
"genre": "Horror novel",
"pages": 666,
"read": false
}

...

Como respuesta, recibimos un status 200 y el libro que acabamos de crear con los datos en cuestión más el \_id y los timestamps (creados automáticamente. Estos últimos porque lo elegimos así en nuestro código):

{
"title": "Drácula",
"author": "Bram Stoker",
"genre": "Horror novel",
"pages": 666,
"read": false,
"\_id": "646d908d2af885041b9313e1",
"createdAt": "2023-05-24T04:20:29.708Z",
"updatedAt": "2023-05-24T04:20:29.708Z",
"\_\_v": 0
}

- Después podemos hacer un GET (http://localhost:4001/api/books) para recibir como respuesta todos los libros que hemos creado y que se encuentran en la base de datos además de un status 200:

[
{
"_id": "646cc5bc643dd2610ef6d34d",
"title": "American Psycho",
"author": "Bret Easton Ellis",
"genre": "Novel",
"pages": 444,
"read": true,
"createdAt": "2023-05-23T13:55:08.636Z",
"updatedAt": "2023-05-23T13:58:44.306Z",
"__v": 0
},
{
"_id": "646cc5ea643dd2610ef6d34f",
"title": "13.99",
"author": "Frederic Beigbeder",
"genre": "Novel",
"pages": 369,
"read": true,
"createdAt": "2023-05-23T13:55:54.900Z",
"updatedAt": "2023-05-23T13:55:54.900Z",
"__v": 0
},
{
"_id": "646cc613643dd2610ef6d351",
"title": "Trainspotting",
"author": "Irvine Welsh",
"genre": "Novel",
"pages": 348,
"read": true,
"createdAt": "2023-05-23T13:56:35.492Z",
"updatedAt": "2023-05-23T13:56:35.492Z",
"__v": 0
},
{
"_id": "646cc62c643dd2610ef6d353",
"title": "El guardián entre el centeno",
"author": "J.D. Salinger",
"genre": "Novel",
"pages": 256,
"read": true,
"createdAt": "2023-05-23T13:57:00.544Z",
"updatedAt": "2023-05-23T13:57:00.544Z",
"__v": 0
},
{
"_id": "646d8fc92af885041b9313df",
"title": "Cuentos para no dormir",
"author": "W.Shakespeare",
"genre": "Novel",
"pages": 333,
"read": false,
"createdAt": "2023-05-24T04:17:13.117Z",
"updatedAt": "2023-05-24T04:17:13.117Z",
"__v": 0
},
{
"_id": "646d908d2af885041b9313e1",
"title": "Drácula",
"author": "Bram Stoker",
"genre": "Horror novel",
"pages": 666,
"read": false,
"createdAt": "2023-05-24T04:20:29.708Z",
"updatedAt": "2023-05-24T04:20:29.708Z",
"__v": 0
}
]

- Hacemos un GET (http://localhost:4001/api/books/646cc5bc643dd2610ef6d34d) (pasamos el id por req.params) para encontrar un libro por su id:

Status: 200

{
"\_id": "646cc5bc643dd2610ef6d34d",
"title": "American Psycho",
"author": "Bret Easton Ellis",
"genre": "Novel",
"pages": 444,
"read": true,
"createdAt": "2023-05-23T13:55:08.636Z",
"updatedAt": "2023-05-23T13:58:44.306Z",
"\_\_v": 0
}

- Hacemos un PUT pasando al final el id del libro si queremos actualizar alguno de sus datos por req.params y enviamos en el req.body el dato a modificar:

{  
 "pages": 667
}

Como respuesta, obtenemos el objeto íntegro modificado:

Status : 200

{
"\_id": "646d908d2af885041b9313e1",
"title": "Drácula",
"author": "Bram Stoker",
"genre": "Horror novel",
"pages": 667,
"read": false,
"createdAt": "2023-05-24T04:20:29.708Z",
"updatedAt": "2023-05-24T04:31:40.263Z",
"\_\_v": 0
}

- Por último, para terminar con el CRUD, haremos un DELETE (http://localhost:4001/api/books/646d8fc92af885041b9313df) con el id por params del libro que deseemos eliminar de la base de datos. Por respuesta recibimos un json ("Book deleted successfully")

Si ahora hacemos un GET de todos los libros, comprobamos que en efecto, en la base de datos no aparece el libro que acabamos de eliminar:

[
{
"_id": "646cc5bc643dd2610ef6d34d",
"title": "American Psycho",
"author": "Bret Easton Ellis",
"genre": "Novel",
"pages": 444,
"read": true,
"createdAt": "2023-05-23T13:55:08.636Z",
"updatedAt": "2023-05-23T13:58:44.306Z",
"__v": 0
},
{
"_id": "646cc5ea643dd2610ef6d34f",
"title": "13.99",
"author": "Frederic Beigbeder",
"genre": "Novel",
"pages": 369,
"read": true,
"createdAt": "2023-05-23T13:55:54.900Z",
"updatedAt": "2023-05-23T13:55:54.900Z",
"__v": 0
},
{
"_id": "646cc613643dd2610ef6d351",
"title": "Trainspotting",
"author": "Irvine Welsh",
"genre": "Novel",
"pages": 348,
"read": true,
"createdAt": "2023-05-23T13:56:35.492Z",
"updatedAt": "2023-05-23T13:56:35.492Z",
"__v": 0
},
{
"_id": "646cc62c643dd2610ef6d353",
"title": "El guardián entre el centeno",
"author": "J.D. Salinger",
"genre": "Novel",
"pages": 256,
"read": true,
"createdAt": "2023-05-23T13:57:00.544Z",
"updatedAt": "2023-05-23T13:57:00.544Z",
"__v": 0
},
{
"_id": "646d8fc92af885041b9313df",
"title": "Cuentos para no dormir",
"author": "W.Shakespeare",
"genre": "Novel",
"pages": 333,
"read": false,
"createdAt": "2023-05-24T04:17:13.117Z",
"updatedAt": "2023-05-24T04:17:13.117Z",
"__v": 0
},
{
"_id": "646d908d2af885041b9313e1",
"title": "Drácula",
"author": "Bram Stoker",
"genre": "Horror novel",
"pages": 667,
"read": false,
"createdAt": "2023-05-24T04:20:29.708Z",
"updatedAt": "2023-05-24T04:31:40.263Z",
"__v": 0
}
]

- Si hacemos cualquier petición a una url que no hemos especificado, recibimos como respuesta un status 500 y un "Route not found"

- Si hacemos una petición y pasamos por req.params una id que no existe, recibimos como respuesta un status 500 y un mensaje de "Book not found"
