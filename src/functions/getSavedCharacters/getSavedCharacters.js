"use strict"

const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");

module.exports.getSavedCharacters = async () => {

    const REGION = "us-east-1";
    const ddbClient = new DynamoDBClient({ region: REGION });

    const params = {
        TableName: "characters-table-dev",
        Select: "ALL_ATTRIBUTES"
    };

    try {
        const response = await ddbClient.send(new ScanCommand(params));
        
        const items = response.Items.map(character => {
            return {
                id: character.characterId.N,
                nombre: character.name.S,
                url: character.url.S
            }
        })

        return {
            statusCode: 200,
            body: JSON.stringify(items)
        };
    }

    catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
        };
    }
}