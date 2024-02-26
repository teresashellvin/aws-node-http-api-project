"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const fillin = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { stuff } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newStuff = {
    id,
    stuff,
    createdAt,
    completed: false
  }
  await dynamoDb.put({
    TableName: "dynamocloud",
    Item: newStuff
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newStuff),
    };
};

module.exports = {
    handler: dynamocloud,
};
