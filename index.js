//import modules
const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

//Middleware
app.use(express.json());

// importing routes
const usersRouters = require('./server/routes/UsersRouter')
//Route
app.use('/', usersRouters)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/',(req,res)=>{
    res.send("Hello World form NodeJS express.");
});


app.listen(app.get('port'),()=>{
console.log("Start server on port "+ app.get('port'))
})