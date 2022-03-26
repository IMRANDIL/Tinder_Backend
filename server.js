require('dotenv').config();


const express = require('express');

const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const router = require('./router/tinder')

//middlewares..

app.use(cors());

app.use(express.json());






//router....


app.use('/tinder/cards', router)










//app listen.....database connection....


const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.URI).then(() => {
    console.log('Db conneted😃');

    app.listen(PORT, () => {
        console.log(`server runs on port: ${PORT}😃`);
    })
}).catch(err => console.log(err))
