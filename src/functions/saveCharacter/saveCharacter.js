"use strict"

const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

module.exports.saveCharacter = async (event) => {
    
    const REGION = "us-east-1";
    const ddbClient = new DynamoDBClient({ region: REGION });

    const { id, nombre, url } = JSON.parse(event.body);

    const params = {
        TableName: "characters-table-dev",
        Item: {
            characterId: { N: id },
            name: { S: nombre },
            url: { S: url }
        },
    }

    try {
        await ddbClient.send(new PutItemCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Character saved successfully",
            })
        };
    }

    catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
        };
    }
}