module.exports = require('./config.' + (process.env.NODE_ENV || 'prod') + '.json');