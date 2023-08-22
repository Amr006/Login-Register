const express = require('express');
const app = express();
require("dotenv").config();
const ip = "localhost";
const Port = process.env.PORT || 3000 ;
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const helmet = require('helmet')
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit')
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
var fs = require('fs')

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const Routes = require('./routes/authRoutes')


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: " A simple Express library api"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],
    //apis: ["./routes/*.js"]

  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsDoc(options);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.json()) //can remove
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors())
app.use(bodyParser.json())
app.use("/api-docs" , swaggerUI.serve , swaggerUI.setup(openapiSpecification));



app.use("/api" , Routes)

app.use(notFound);
app.use(errorHandler);



mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(Port, () => {
      console.log(`App listening at http://${ip}:${Port}`);
      console.log("Database Connected : " , result.connection.host,result.connection.name)
        
    });
  })
  .catch((err) => {
    console.log(err);
  });
