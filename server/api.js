require('dotenv').config();
const express = require('express');
const logger = require('pint-sized-logger');
const port = process.env.REACT_APP_API_PORT || 9002;

function startServer() {

    const app = express();

    app.get('/api/fakeOne', function (req, res) {
        logger.info('Request Info : fakeOne with ', req.query.id);
        res.header("Access-Control-Allow-Origin", "*");
        setTimeout(() => {
            res.json({
                id: req.query.id,
                text: `This is the content you sent: ${req.query.id}`
            });
        }, 300); // OMG SO SLLLOOOOOWWWW!
    });

    app.get('/api/fakeTwo', function (req, res) {
        logger.info('Request Info : fakeTwo with ', req.query.id);
        res.header("Access-Control-Allow-Origin", "*");
        res.json(new Array(10)
            .fill(1)
            .map(idx => ({
                id: idx,
                text: `This is the ${idx}th one of these`
            })));
    });

    logger.info(`API listening on port ${port}`);
    app.listen(port);
    return app;
};

startServer();