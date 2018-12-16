import app from './app'

let appConfig = {}

switch (process.NOde_ENV) {
    case 'production':
        appConfig = app.prod
        break;
    case 'development':
        appConfig = app.dev
        break;
    case 'test':
        appConfig = app.test
        break;
    default:
        appConfig = app.dev
        break;
}

export default appConfig
