import express from 'express';
import './conecctionDb/connection';
import cors from 'cors';
import carsRouters from './routes/cars.router';

const app = express();
app.listen(5000,()=>{
    console.log("running 5000");
});
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api',carsRouters);

