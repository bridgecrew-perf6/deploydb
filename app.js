const express = require('express');
const mongoose = require('mongoose');
const router = require('./Router/index');
const cors=require('cors');

const app = express();

const localDBUrl = 'mongodb://127.0.0.1:27017/db_edureka';


app.use(express.json());
app.use('api/', router);

mongoose.connect(process.env.SERVER_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(res => {
        app.listen(process.env.PORT,() => {
            console.log(`Server is running `)
        });
    })
    .catch(err => console.log(err));

