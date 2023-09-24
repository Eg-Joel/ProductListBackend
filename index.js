const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const categoryRouter = require("./routers/category")
const productRouter = require("./routers/product")
dotenv.config()

mongoose.connect(
    process.env.MONGODB
).then(()=>console.log("Database connected"))
.catch((err) => {
    console.log(err);
})
const corsOptions = {
    origin: ['http://localhost:3000', 'https://main.d1ywfzcdpkouey.amplifyapp.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
   
  };

app.use(express.json()) 
app.use("/api/category",cors(corsOptions), categoryRouter)
app.use("/api/product",cors(corsOptions), productRouter)
// app.use(cors());

app.listen( 5000,() => {
    console.log("server is running");
  })
  