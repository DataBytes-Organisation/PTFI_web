/*
This module contains backend web server code for the PTFI website.
*/

// Package imports
const cors = require('cors');
const express = require('express');
const fs = require("fs");
const https = require("https");
const path = require('path');

// Constants
const HTTP_PROTOCOL = "http";
const HTTPS_PROTOCOL = "https";
const DEFAULT_PORT = "5000";
const SSL_KEY_PATH = "../ssl/localhost-key.pem";
const SSL_CERTIFICATE_PATH = "../ssl/localhost.pem";
const CLIENT_BUILD_PATH = "../../client/build";

/**
 * Base class for builder pattern
 */
class BuilderBase {
  /**
   * Default constructor for builder pattern
   */
  constructor() {
    this.result = null
  }

  /**
   * Build method that inheriting classes should override
   */
  build () {
    // Inheriting classes overwrite this method
    console.log("Builder build method requires implementation.")
  }

  /**
   * Basic get method to return built object
   * @returns {*} Returns this.result
   */
  get() {
    return this.result;
  }

  /**
   * Builds and then returns build object
   * @returns {*} Returns this.result
   */
  buildAndGet() {
    this.build();
    return this.get();
  }
}

/**
 * Class following builder pattern that builds Express http server application.
 */
class HTTPServerBuilder extends BuilderBase {
  /**
   * Builds Express http server application and sets as this.result
   */
  build() {
    var app = express();
    app.use(express.static(path.join(__dirname, CLIENT_BUILD_PATH)));
    app.use(cors());
    app.use(express.json());
    this.result = app;
  }
}

/**
 * Class following builder pattern that builds https.Server
 */
class HTTPSServerBuilder extends BuilderBase {
  /**
   * Builds https.Server application and sets as this.result
   */
  build() {
    var httpApp = new HTTPServerBuilder().buildAndGet();
    var options = {
      key: fs.readFileSync(path.join(__dirname, SSL_KEY_PATH)),
      cert: fs.readFileSync(path.join(__dirname, SSL_CERTIFICATE_PATH)),
    };
  
    this.result = https.createServer(options, httpApp);
  }
}

/**
 * 'Builds' HTTPServer or HTTPSServer based on protocol provided.
 */
class ServerBuilder extends BuilderBase {
  /**
   * 
   * @param {String} protocol Expects http or https as value
   */
  build(protocol) {
    if (protocol == HTTP_PROTOCOL) {
      var builder = new HTTPServerBuilder();
    }
    else if (protocol == HTTPS_PROTOCOL) {
      var builder = new HTTPSServerBuilder();
    }
    else {
      console.log(`Invalid protocol provider to ServerBuilder. Protocol: ${protocol}`);
    }
    this.result = builder.buildAndGet();
  }
  /**
   * Build and return http server or https server based on provided protcol
   * 
   * @param {String} protocol Expects http or https as value
   * @returns {*} Returns Express http server or https.server
   */
  buildAndGet(protocol) {
    this.build(protocol);
    return this.get();
  }
}

/**
 * Class for running PTFI website.
 */
class PTFIWebsite {
  /**
   * Constructor console arguments to configure web server.
   * 
   * @param {Array} args Console arguments. Expect it to contain port and protocol
   */
  constructor(args) {
    var parsedArgs = this.parseArgs(args);
    this.protocol = parsedArgs.protocol;
    this.port = parsedArgs.port;
    this.server = new ServerBuilder().buildAndGet(this.protocol);
  }

  /**
   * Accepts console arguments and provides default values if they are undefined.
   * Returns result
   * 
   * @param {*} args 
   * @returns {Object} First element is String http or https, Second being port as number
   */
  parseArgs(args) {
    return {
      protocol: args.protocol || HTTP_PROTOCOL,
      port: args.port || DEFAULT_PORT
    }
  }

  /**
   * Runs the web server.
   */
  run() {
    this.server.listen(this.port, () => {
      console.log(`Server running using ${this.protocol} protocol at ${this.protocol}://localhost:${this.port}`);
    });
  }
}

module.exports = {
  HTTPServerBuilder,
  HTTPSServerBuilder,
  ServerBuilder,
  PTFIWebsite
}
