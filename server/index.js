const express = require("express");
const consola = require("consola");
const timeout = require("connect-timeout");
const helmet = require("helmet");
const { Nuxt, Builder } = require("nuxt");
const app = express();

const IS_DEV = !(process.env.NODE_ENV === "production");

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = IS_DEV;

async function start() {
    function haltOnTimedout(req, res, next) {
        if (!req.timedout) {
            return next();
        }
        console.log("NUXT TIMED OUT AT REQUEST :: " + req.url);
    }

    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    const { host, port } = nuxt.options.server;

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }

    app.use(timeout("25s"));
    app.use(helmet());
    app.use(haltOnTimedout);
    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'", "*.epicsevendb.com"],
                frameSrc: ["'self'", "*.epicsevendb.com", "*.twitter.com"],
                fontSrc: ["'self'", "*.gstatic.com"],
                styleSrc: ["'self'", "'unsafe-inline'", "*.twitter.com", "*.twimg.com", "*.googleapis.com"],
                imgSrc: ["'self'", "data:", "*.epicsevendb.com", "*"],
                scriptSrc: [
                    "'self'",
                    "'unsafe-inline'",
                    "*.google.com",
                    "*.googleapis.com",
                    "*.google-analytics.com",
                    "*.cloudflare.com",
                    "*.doubleclick.net",
                    "*.buymeacoffee.com",
                    "*.ko-fi.com",
                    "*.g.doubleclick.net",
                    "*.twitter.com",
                    "*.twimg.com",
                    IS_DEV ? "'unsafe-eval'" : "'self'",
                ],
                connectSrc: [
                    "'self'",
                    "*.epicsevendb.com",
                    "epicsevendb-apiserver.herokuapp.com",
                    "*.cloudflare.com",
                    "*.google-analytics.com",
                    "*.google.com",
                    "*.googleapis.com",
                    "*.doubleclick.net",
                    "*.g.doubleclick.net",
                    "*.twitter.com",
                    "*.iubenda.com",
                ],
            },
        })
    );
    app.use(haltOnTimedout);
    // Give nuxt middleware to express
    app.use(nuxt.render);
    app.use(haltOnTimedout);

    // Listen the server
    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true,
    });
}
start();
