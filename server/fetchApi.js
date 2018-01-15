"use strict";

const fetch = require('node-fetch');
const serviceHost = process.env.NODE_SERVICE_HOST || 'http://k-fe-practical.herokuapp.com';
const logger = require('./logger');
const qs = require('querystring');

const cache = {};
const ttl = process.env.NODE_TTL;


function cacheGet(cacheKey) {

    const cached = cache[cacheKey];
    const currTime = Date.now();

    if (cached) {
        const { time, value } = cached;
        if ((currTime - time) < ttl) {
            logger.trace(`cache hit for ${cacheKey}`);
            return value;
        }
    }

    logger.trace(`cache miss for ${cacheKey}`);
    cache[cacheKey] = null;
    return null;
}

function cacheSet(cacheKey, json) {

    logger.trace(`populating cache for ${cacheKey}`);
    const time = Date.now();
    cache[cacheKey] = { time, value: json };

    return cache[cacheKey].value;
}

module.exports = function fetchApi(resource, query) {

    const queryString = qs.stringify(query);
    const url = `${serviceHost}/api/${resource}/?${queryString}`;
    logger.info(`fetching resource ${url}`);
    const cached = cacheGet(url);

    if (cached) {
        return Promise.resolve(cached);
    }

    return fetch(url)
        .then(response => response.json())
        .then(json => {
            return cacheSet(url, json);
        });
};
