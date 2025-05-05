import express, { Router } from 'express';
import { notasRoutes } from './routes/index.js';
import cors from 'cors';

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));
 
const app = express();
const port = process.env.PORT || 401;
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("productos corriendo " + port);
});

app.use("/notas-medicas",notasRoutes
);

app.listen(port,()=>{
  console.log("Mi primer Servicio de Productos!",port);
});