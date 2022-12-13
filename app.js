const express =require('express')
import {db} from './config';
const app = express();
db();
app.use('/', (req,res)=>{
    res.send("rodando")
})
app.listen(3000);