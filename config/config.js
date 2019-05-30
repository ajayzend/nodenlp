// get config from environment

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8811;

// init config obj containing the app settings
const config = {
  env: NODE_ENV,
  server: {
    port: PORT,
  },
};
module.exports = config;
