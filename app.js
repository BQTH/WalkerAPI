//Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// cors for cross domain data requests.
const cors = require('cors');
//Import routes
var landmarksRoute = require('./routes/landmarks');
var pplRoute = require('./routes/ppl');
//Import env
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Middlewares
app.use(cors());
app.use('/landmarks', landmarksRoute);
app.use('/ppl_count', pplRoute);


//ROUTES
app.get('/', (req, res) => { 
    res.send('Send get/post/delete/patch requests for/with data to https://interactiveellieapi.herokuapp.com/landmarks' );
});

//connect to database
mongoose.connect(process.env.DB_CONNECTION,
 { useNewUrlParser: true, useUnifiedTopology: true },
 () => { console.log("Connected to db");
})

//listen to server
let port = process.env.PORT;
if (port == null || port == "") {
  
  port = 7000;
  
}
console.log(port);
app.listen(port);
