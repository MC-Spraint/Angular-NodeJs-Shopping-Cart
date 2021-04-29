const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const server = require('http').createServer(app);

const mongoose = require('mongoose');

const api = require('./router/api');

const db ="mongodb+srv://McSpraint:mcspraint@2021@cluster0.liez7.mongodb.net/SWT?retryWrites=true&w=majority";

const PORT = 3000;

app.use(cors({
        origin: "http://localhost:4200"
}));


app.set('view engine' , 'ejs');//temporary

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api' , api);

//Connecting MongoDB Atlas with Mongoose...        
mongoose.connect(db,{useUnifiedTopology: true,useNewUrlParser:true})                                                                                                               .then( ()=>{console.log("2.Database connected successfully..")})                        .catch( (err)=>{console.error(err),console.log("Database not connected!")});



app.get('/' , (req,res)=>{
	res.send("Hello from server");
});

server.listen(PORT, ()=>{
	console.log("Server is listening on localhost:"+ PORT);
});

