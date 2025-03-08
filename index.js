import express from 'express'
import { connection,User } from './postsql.js';

const app=express();
const PORT=3000;
await connection();




app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})