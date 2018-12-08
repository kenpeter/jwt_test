'use strict';

// use this to gen
// https://medium.com/@siddharthac6/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e

// local
const fs = require('fs');

// jwt
const jwt = require('jsonwebtoken');

// pri key
var privateKEY  = fs.readFileSync('./pri_key', 'utf8');
// pub key
var publicKEY  = fs.readFileSync('./pub_key', 'utf8');

// sign jwt
// data
var payload = {
 data1: "Data 1",
 data2: "Data 2",
 data3: "Data 3",
 data4: "Data 4",
};

var i  = 'failrant-back';   
var s  = 'some@user.com';   
var a  = 'failrant';
var signOptions = {
 issuer:  i,
 subject:  s,
 audience:  a,
 expiresIn:  "12h",
 algorithm:  "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
};

var token = jwt.sign(payload, privateKEY, signOptions);

console.log("Token :" + token);



// verify
var verifyOptions = {
 issuer:  i,
 subject:  s,
 audience:  a,
 expiresIn:  "12h",
 algorithm:  ["RS256"]
};
// verify
var legit = jwt.verify(token, publicKEY, verifyOptions);
// print
console.log("\nJWT verification result: " + JSON.stringify(legit));


