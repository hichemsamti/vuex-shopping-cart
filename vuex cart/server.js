const express = require('express')
const bodyParser=require('body-Parser')
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://hichem:1-hichemmarwa@cluster0.vo1cj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });
//'mongodb://localhost/test'
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
const cors=require('cors')
const app =express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/product',require('./routes/productRoute'))
app.use('/order',require('./routes/orderRoute'))
//app.use(express.static('./client/crud/public'))

const port=3000
app.listen(port)