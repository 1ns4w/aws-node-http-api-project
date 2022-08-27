"use strict"

const axios = require('axios');

module.exports.getCharacter = async (event) => {

    try {
        const characterData = await axios.get('https://swapi.py4e.com/api/people/' + event.pathParameters.characterId);
        return {
            statusCode: 200,
            body: JSON.stringify(characterData.data)
        };
    }

    catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
        };
    }
  
}