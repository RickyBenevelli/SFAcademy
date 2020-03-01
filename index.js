//import modules
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express();

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.json());

// importing routes
const usersRouters = require('./server/routes/UsersRouter')
//Route
app.use('/router', usersRouters)


app.listen(app.get('port'),()=>{
console.log("Start server on port "+ app.get('port'))
})