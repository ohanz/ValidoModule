// validators.js
const validators = {
    isValidEmail: (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    },
    isValidPassword: (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      return passwordRegex.test(password);
    },
    isValidName: (name) => {
      const nameRegex = /^[a-zA-Z ]{2,30}$/;
      return nameRegex.test(name);
    }
  };
  
  module.exports = validators;