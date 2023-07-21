const app = require('express')();
const PORT = 8080;  
const express = require('express');

app.use(express.json() )
app.listen(

    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)

)

app.get('/tshirt',(req,res) => {


    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
});

app.post('/tshirt/:id',(req,res) =>{

    const { id } = req.params;
    const { logo } = req.body;
    if(!logo){
        res.status(418).send({message:'we need a logo'})
        

    }
    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});