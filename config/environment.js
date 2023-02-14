/*****************************************
 * ENVIRONMENT
 ******************************************/

const development = {
  name: 'development',
  db: process.env.MONGO_URL,
  port: 8080,
  jwt_secret: 'secret',
};

const production = {
  port: 8080,
  name: 'production',
  db: process.env.MONGO_URL,
  jwt_secret: process.env.JWT_SECRET,
};

module.exports = process.env.NODE_ENV === undefined ? development : production;
