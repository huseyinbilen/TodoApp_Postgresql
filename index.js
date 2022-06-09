const express = require('express');

const postgresClient = require('./config/db');
const taskRouter = require('./routes/taskRouter');

const app = express();

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.use('/', taskRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App Started Sucessfully on ${port} Port`);
    postgresClient.connect(err => {
        if(err) {
            console.log('Connection Failed!', err);
        }
        else {
            console.log('DB Connected Sucessfully');
        }
    });
});