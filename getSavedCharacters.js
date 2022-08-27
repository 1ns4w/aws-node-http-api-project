"use strict"

module.exports.getSavedCharacters = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "POST request to /saveCharacter",
        })
    };
}