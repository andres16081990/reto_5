'use strict'

import express from 'express'

const app = express();

app.get('/',(req,res)=>{

    let numbers = ``;

    for(let i=1; i<51;i++)
    {
        if(i %2===0){
            numbers +=`<p>${i} Soy Par!</p>`
        }
        else{
            numbers +=`<p>${i} Soy Impar!</p>` 
        }
        
    }
    res.status(200).send(numbers)
})


app.listen(3000,()=>console.log('server running in por 3000'))