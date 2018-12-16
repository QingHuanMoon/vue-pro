const dev = require('./src/config/dev')
const test = require('./src/config/test')
const prod = require('./src/config/prod')
let currentConfig = null

switch (process.env.NODE_ENV) {
    case 'production':
        currentConfig = prod
        break;
    case 'test':
        currentConfig = test
        break;
    case 'development':
        currentConfig = dev
        break;
    default:
        currentConfig = dev
        break
}

module.exports = currentConfig
