const express=require('express');
const bodyParser=require('body-parser')
import todoRoutes from './routes/todos'
const app=express();

app.use(bodyParser.json())

app.use(todoRoutes)

app.listen(3000);

