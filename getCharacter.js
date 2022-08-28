"use strict"

const axios = require('axios');

module.exports.getCharacter = async (event) => {

    try {
        const { characterId } = JSON.parse(event.pathParameters);
        const response = await axios.get('https://swapi.py4e.com/api/people/' + characterId);
        const { name, url } = response.data;

        const characterData = {
            id: characterId,
            nombre: name,
            url: url
        }

        return {
            statusCode: 200,
            body: JSON.stringify(characterData)
        };
    }

    catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
        };
    }
  
}