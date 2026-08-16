const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middleware/authentication");
require('dotenv').config()
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL).then((e)=>
{
    console.log("mongo db connected");
})

app.use(cors(
  {
    origin: 'http://127.0.0.1:5500', 
    credentials: true
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.use('/api',userRoute);


app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
