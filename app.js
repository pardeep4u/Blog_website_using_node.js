const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Data = require('./Additional_data/data');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static('public'));
// constraints
/*var heading = [];
var testar = [];
var head;
var para;*/
/* Below code for getting request */
var testar = [];
var testpa = [];

var head;
var para;

app.get('/', (req,res) => {
    res.render('index',{
        len: testar.length,
        heading: testar,
        textji: testpa
    });
} );

app.get('/add_me', (req,res) => {
    res.render('Add.ejs');
} );

// Below code for posting request

app.post('/', (req,res) => {

    head = req.body.getTitle;
    para = req.body.getText;
    Data.add_item(head,para);
    testar.push(head);
    testpa.push(para);
    console.log(Data.showArray()[testar.length - 1].author);
    //var len = Data.showArray().length;
    //res.send('<h1>DONE</h1>');
    //console.log(testar);
    res.redirect('/');

});






app.listen(2000, () => {
    console.log("Welcome to port 2000");
} );