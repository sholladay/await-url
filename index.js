'use strict';

const got = require('got');

const awaitUrl = (url, option) => {
    const config = Object.assign({}, option, {
        interval : 1000,
        tries    : 60
    });

    return new Promise((resolve, reject) => {
        const attempt = async (tries) => {
            const res = await got(url, {
                followRedirect : false,
                timeout        : 5000
            });
            if (res.statusCode === 200) {
                resolve();
            }
            else if (Math.max(1, tries) > 1) {
                setTimeout(attempt, config.interval, tries - 1);
            }
            else {
                reject(new RangeError(`Expected 200 response but got ${res.statusCode}`));
            }
        };
        attempt(config.tries).catch(reject);
    });
};

module.exports = awaitUrl;
