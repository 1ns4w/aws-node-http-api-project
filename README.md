<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# RETO TÉCNICO BACKEND NODEJS

Solución para el reto técnico de backend de NodeJS.

## Requisitos

### Clonar el repositorio

```
$ git clone https://github.com/aamejia/aws-node-http-api-project.git
```

Despues de clonar el repositorio, cambiar de directorio a la carpeta del proyecto:

```
$ cd aws-node-http-api-project
```

### Iniciar sesión en AWS

```
$ aws configure
```

### Iniciar sesion en Serverless

```
$ serverless login
```

### Instalar las dependencias

#### Función para guardar un personaje de Star Wars:

```
$ cd src/functions/saveCharacter
$ npm install
```

#### Función para obtener los personajes de Star Wars guardados:

```
$ cd src/functions/getSavedCharacters
$ npm install
```

Nota: Se debe regresar a la carpeta `aws-node-http-api-project` despues de ejecutar cada comando.

#### Dependencias del proyecto

```
  $ npm install
```

## Ejecutar el proyecto

### Cambiar parametros de `serverless.yml`
Remplazar org, app, y service con tus propios valores.

### Desplegar el proyecto

```
$ serverless deploy
```
Luego de desplegar el proyecto veras las rutas de acceso a las funciones:

```
Deploying aws-node-http-api to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-dev (105s)

dashboard: https://app.serverless.com/amejia/apps/aws-node-http-api/aws-node-http-api/dev/us-east-1
endpoints:
  POST - https://n8p4evemei.execute-api.us-east-1.amazonaws.com/save-character
  GET - https://n8p4evemei.execute-api.us-east-1.amazonaws.com/get-saved-characters
functions:
  saveCharacter: aws-node-http-api-dev-saveCharacter (3 MB)
  getSavedCharacters: aws-node-http-api-dev-getSavedCharacters (2.8 MB)
```

Nota: Las rutas de acceso mostradas son solo ejemplos.

## Probar la API
Se puede probar la API con herramientas como Postman o Insomnia.
### Datos de funcion para guardar un personaje de Star Wars
- Mètodo: POST
- Llave: id
- Valor: un número entero positivo

Ejemplo de respuesta:
```
{
    "data": {
        "id": 5,
        "nombre": "Leia Organa",
        "url": "https://swapi.py4e.com/api/people/5/"
    },
    "message": "Character saved successfully"
}
```

### Datos de función para obtener los personajes de Star Wars guardados
- Mètodo: GET

Ejemplo de respuesta:
```
[
    {
        "id": "7",
        "nombre": "Beru Whitesun lars",
        "url": "https://swapi.py4e.com/api/people/7/"
    },
    {
        "id": "4",
        "nombre": "Darth Vader",
        "url": "https://swapi.py4e.com/api/people/4/"
    },
    {
        "id": "5",
        "nombre": "Leia Organa",
        "url": "https://swapi.py4e.com/api/people/5/"
    }
]

```