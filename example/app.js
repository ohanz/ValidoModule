const validationModule = require('../valido-module');

const email = 'ohanz99@hyemail.com';
const password = 'HyperStrongP@ssw0rd';
const name = 'Ohanz Yung';

console.log(validationModule.validateEmail(email)); // true
console.log(validationModule.validatePassword(password)); // true
console.log(validationModule.validateName(name)); // true