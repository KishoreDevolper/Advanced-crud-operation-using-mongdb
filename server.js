const express = require("express");

const app = express();

const connectb = require("./database/MongoConnect");

const errorhandler = require('./middleware/error-hndler');

require("dotenv").config();

const routes = require("./routes/user.routes")

app.use(express.json());

app.use("/api",routes)

app.use(errorhandler)
const port = process.env.PORT ||  5000 ;

const start = async ()=> {
try {
    await connectb(process.env.MongoDb_Url)
    app.listen(port,()=> console.log(`Server Looking on the port ${port}`))    
} catch (error) {
    console.log(error)
}
}
start()
