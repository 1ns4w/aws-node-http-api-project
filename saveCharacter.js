"use strict"

module.exports.saveCharacter = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "GET request to /saveCharacter",
        })
    }
}