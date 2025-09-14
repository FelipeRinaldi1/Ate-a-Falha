import App from './src/app.js'

const port = 3000
const app = new App(port)

app.getServer().listen(app.getPort,()=>{
    console.log("Servidor aberto na porta",app.getPort())
})