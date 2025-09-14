import App from './src/app.js'

const port = 3000
const app = new App(port)

app.getServer().get("/",(req,res)=>{
    res.send("hello")
})