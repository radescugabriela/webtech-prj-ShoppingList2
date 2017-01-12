var express= require('express');
var bodyParser= require('body-parser');
var cors= require('cors');
var models = require("./models");

var app = new express();
app.use(bodyParser.json());
app.use(cors());

var List=models.List;

var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));



//metode REST
app.use(require("./routes/lists.js"));
app.use(require("./routes/categories.js"));



app.use(express.static('admin'));
app.listen(process.env.PORT);



