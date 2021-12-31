const express = require('express');
const mongoose = require('mongoose');
const router = require('./Router/index');
const cors=require('cors');

const app = express();
const localDBUrl = 'mongodb://127.0.0.1:27017/db_edureka';
app.use(express.json());
app.use('/api', router);
app.use(cors());

mongoose.connect(process.env.SERVER_URL, {
    useNewUrlParser: true, useUnifiedTopology: true,
   
})
    .then(res => {const express = require('express');
    const mongoose = require('mongoose');
    const cors=require('cors');
    
    const router = require('./Router/index');
    
    const app = express();
    app.use(cors());
    const port =process.env.PORT || 1910;
    const hostname = '0.0.0.0/0';
    const DBUrl = 'mongodb://127.0.0.1:27017/db_edureka';
    const atlasDBUrl = 'mongodb+srv://lavanya:lav2020@cluster0.soajy.mongodb.net/db_edureka?authSource=admin&replicaSet=atlas-95f5rx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
    
    app.use(express.json());
    app.use('/api', router);
    
    mongoose.connect(atlasDBUrl, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
        .then(res => {
            app.listen(port, hostname, () => {
                console.log(`Server is running at ${hostname}:${port}`)
            });
        })
        .catch(err => console.log(err));
    
    
        app.listen(process.env.PORT,() => {
            console.log(`Server is running `)
        });
    })
    .catch(err => console.log(err));

