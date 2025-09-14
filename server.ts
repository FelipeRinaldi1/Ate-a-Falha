import { server } from 'typescript'
import app from './src/app.js'

const appServer = app

app.get("/",(req,res)=>{
    res.send("hello")
})