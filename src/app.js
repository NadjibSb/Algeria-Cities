const express = require('express');
const loaders = require('./config/loader');
const config = require('./config');
const routes = require('./routes');
const ctrl = require('./app/wilayas/wilayaController');

async function startServer() {

    const app = express();

    loaders(app);
    app.use('/',routes);


    app.listen(config.PORT, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Your server is ready !`);
        ctrl.reset();
    });
}

startServer();