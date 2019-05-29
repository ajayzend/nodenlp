const sentiment = require('wink-sentiment');
/**
 * @name test
 * @class
 * @constructor
 * @param {String} name - this will be name of the application.
 */

module.exports = function(app, express) {
  const api = express.Router();



   /**
     * @function
     * @memberof myapp
     * @name getName
     * @return {json}
     */
  api.get('/test', function(req, res) {
    // positive sentiment
    const text = 'students can check their scores on the official website';
    const sntmt = sentiment(text);
    res.send({
      data: sntmt,
      status: true,
      message: 'success',
    });
  });
  return api;
};
