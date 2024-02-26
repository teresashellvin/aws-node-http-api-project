"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const espectaculo = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let stuff;

  try{
  const result = await dynamoDb.scan({
    TableName: "dynamocloud"
  }).promise();
  stuff = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(stuff),
    };
};

module.exports = {
    handler: espectaculo,
};
