import express from 'express'
import userRouter from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(express.json())

// Routes
app.use('/api', userRouter);

app.get('/',(req,res)=>{
        res.send('Hello World!')
})


export default app