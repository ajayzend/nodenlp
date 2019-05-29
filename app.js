/**
* Calculation methods
*/

const app = {

  /**
   * Jira client library
   *
   * @example
   * const jira = new Jira({
   *   host: 'yourhost',
   *   user: 'jhn@doe.com',
   *   token: 'secret',
   * })
   *
   * const projects = await jira.projects()
   *
   * @see  https://developer.atlassian.com/cloud/jira/platform/rest/v3
   * @todo  implement all methods
   */

  /**
   * Static method.
   * @return {string} Just return string value.
   */
  sayHello: function() {
    return 'hello';
  },

  /**
   * Add two numbers.
   * @param {number} value1 The first number.
   * @param {number} value2 The second number.
   * @return {number} The sum of the two numbers.
   */
  addNumbers: function(value1, value2) {
    return value1 + value2;
  },
};
module.exports = app;
