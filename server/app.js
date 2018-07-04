const express = require('express');
const path = require('path');
const logger = require('pint-sized-logger');
const port = 9001;

module.exports = function startServer() {

    const app = express();

    app.use(express.static(path.join(__dirname, '../build')));

    app.get('/', function (req, res) {
        logger.info('Request Info : home route');
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });

    app.get('/fakeApi', function (req, res) {
        logger.info('Request Info : fakeApi');
        res.json({
            id: req.query.id,
            text: `This is the content you sent, ${req.query.id}`
        });
    });

    logger.info(`listening on port ${port}}`);
    app.listen(port);

    return app;
};
