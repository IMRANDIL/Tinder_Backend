require('dotenv').config();


const express = require('express');

const cors = require('cors')
const mongoose = require('mongoose')
const app = express();


//middlewares..

app.use(cors());

app.use(express.json());





const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.URI).then(() => {
    console.log('Db conneted😃');

    app.listen(PORT, () => {
        console.log(`server runs on port: ${PORT}😃`);
    })
}).catch(err => console.log(err))
