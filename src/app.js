const app = {
  /**
  * @method
   * sayHello.
   * @return {string} Just return string value.
   */
  sayHello: function() {
    return 'hello';
  },

  /**
  *@method
   * addNumbers.
   * @param {number} value1 The first number.
   * @param {number} value2 The second number.
   * @return {number} The sum of the two numbers.
   */
  addNumbers: function(value1, value2) {
    return value1 + value2;
  },
};
module.exports = app;
