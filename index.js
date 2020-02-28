//import modules
const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

//Middleware
app.use(express.json());

app.use('/',(req,res)=>{
    res.send("Hello World form NodeJS express.");
});



app.listen(app.get('port'),()=>{
console.log("Start server on port "+app.get('port'))
})