const express = require("express");
const morgan =  require("morgan");

const app = express();

//settings

app.set('port', process.env.PORT || 5000);
app.use(express.json({type: ['application/json', 'text/plain']}));
app.options('*', (req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.send();
});

//middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

//routes
app.use(require('./routes/index'))


module.exports = app;