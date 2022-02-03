const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');

let userData = {
    email: 'ankur',
    password: '123'
}
let secret = 'supersecret';

const token = jwt.sign(userData, secret);
const decodeToken = jwt.verify(token, secret);
console.log(decodeToken);