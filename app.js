//importing require packages
const express = require('express');
const httpStatus = require('http-status')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const dotenv = require('dotenv')
const {join} = require("node:path");

//enabling env variables
dotenv.config()


//creating express app instance
const app = express();

//set view engine
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(join(__dirname, 'public')))

//We need to parse HTML data
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//adding security meassures
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

//importing routes
const router = require('./routes/router')
app.use(router);


app.use((err, req, res, next) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(httpStatus["500_MESSAGE"])
})

const listener = app.listen(process.env.PORT | 3000, 'localhost', () => {
    console.log(`Server is running on http://${listener.address().address}:${listener.address().port}`)
})