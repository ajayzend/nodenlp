/**
* Calculation methods
*/

const app = {
  sayHello: function() {
    return 'hello';
  },

  addNumbers: function(value1, value2) {
    return value1 + value2;
  },

  fact: function(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * this.fact(n -1);
    }
  },

};
module.exports = app;
