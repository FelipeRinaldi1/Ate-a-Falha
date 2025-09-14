import App from './src/app.js'

const appServer = new App(3000)

module.exports = appServer.getServer();