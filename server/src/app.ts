import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.js';
import {userBodyCompositionRouter,generalBodyCompositionRouter} from './routes/bodyCompositionRoutes.js';
import nutritionRouter from './routes/nutritionRoutes.js';



const app = express();

// Middleware
app.use(express.json())
app.use(cors())


// Routes
app.use('/api/users', userRouter);
app.use('/api/nutrition', nutritionRouter);

app.get('/',(req,res)=>{
        res.send('Hello World!')
})


export default app