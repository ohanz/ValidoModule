// index.js
const validators = require('./validators');

module.exports = {
  validateEmail: (email) => validators.isValidEmail(email),
  validatePassword: (password) => validators.isValidPassword(password),
  validateName: (name) => validators.isValidName(name)
};