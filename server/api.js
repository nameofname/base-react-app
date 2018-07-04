require('dotenv').config();
const express = require('express');
const logger = require('pint-sized-logger');
const port = process.env.REACT_APP_API_PORT || 9002;

function startServer() {

    const app = express();

    app.get('/api/fakeApi', function (req, res) {
        logger.info('Request Info : fakeApi with ', req.query.id);
        res.header("Access-Control-Allow-Origin", "*");
        setTimeout(() => {
            res.json({
                id: req.query.id,
                text: `This is the content you sent: ${req.query.id}`
            });
        }, 1000); // OMG SO SLLLOOOOOWWWW!
    });

    logger.info(`API listening on port ${port}`);
    app.listen(port);
    return app;
};

startServer();