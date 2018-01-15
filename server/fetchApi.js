"use strict";

const fetch = require('node-fetch');
const serviceHost = process.env.NODE_SERVICE_HOST || 'http://k-fe-practical.herokuapp.com';

const cache = {};
const ttl = 5000; // 5 second TTL


function cacheGet(resource, query) {

    const cacheKey = `${resource}-${query}`;
    const cached = cache[cacheKey];
    const currTime = Date.now();

    if (cached) {
        const { time, value } = cached;
        if ((currTime - time) > ttl) {
            return null;
        }
        return value;
    }

    return null;
}

function cacheSet(resource, query, value) {

    const cacheKey = `${resource}-${query}`;
    const time = Date.now();
    cache[cacheKey] = { time, value };

    return cache[cacheKey];
}

module.exports = function fetchApi(resource, query) {

    const cached = cacheGet(resource, query);

    if (cached) {
        return cached;
    }

    return fetch(`${serviceHost}/api/${resource}/?${query}`)
        .then(response => response.json())
        .then(json => {
            return cacheSet(resource, query, json);
        });
};
