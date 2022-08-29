"use strict"

const axios = require('axios');
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

module.exports.saveCharacter = async (event) => {

    try {

        const REGION = "us-east-1";
        const ddbClient = new DynamoDBClient({ region: REGION });

        const { id } = JSON.parse(event.body);
        const response = await axios.get('https://swapi.py4e.com/api/people/' + id);
        const { name, url } = response.data;
    
        const params = {
            TableName: "characters-table-dev",
            Item: {
                characterId: { N: id.toString() },
                name: { S: name },
                url: { S: url }
            },
        }

        await ddbClient.send(new PutItemCommand(params));
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: {
                    id: id,
                    nombre: name,
                    url: url
                },
                message: "Character saved successfully"
            })
        };
    }

    catch (error) {
        return {
            statusCode: error.$metadata.httpStatusCode,
            body: JSON.stringify({
                message: error.message
            })
        };
    }
}