/*
This module contains backend web server code for the PTFI website.
*/

// Package imports
const express = require('express');
const cors = require('cors');
const path = require('path');
const process = require('process');
const minimist = require('minimist');
const https = require("https");
const fs = require("fs");

// Actual constants
const HTTP_PROTOCOL = "http";
const HTTPS_PROTOCOL = "https";
const DEFAULT_PORT = "5000";
const SSL_KEY_PATH = "../ssl/localhost-key.pem";
const SSL_CERTIFICATE_PATH = "../ssl/localhost.pem";
const CLIENT_BUILD_PATH = "../../client/build";

class BuilderBase {
  constructor() {
    this.result = null
  }

  build () {
    // Inheriting classes overwrite this method
    console.log("Builder build method requires implementation.")
  }

  get() {
    return this.result;
  }

  buildAndGet() {
    this.build();
    return this.get();
  }
}

class HTTPServerBuilder extends BuilderBase {
  build() {
    var app = express();
    app.use(express.static(path.join(__dirname, CLIENT_BUILD_PATH)));
    app.use(cors());
    app.use(express.json());
    this.result = app;
  }
}

class HTTPSServerBuilder extends BuilderBase {
  build() {
    var httpApp = new HTTPServerBuilder().buildAndGet();
    var options = {
      key: fs.readFileSync(path.join(__dirname, SSL_KEY_PATH)),
      cert: fs.readFileSync(path.join(__dirname, SSL_CERTIFICATE_PATH)),
    };
  
    this.result = https.createServer(options, httpApp);
  }
}

class ServerBuilder extends BuilderBase {
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
    this.result = builder.buildAndGet()
  }
  buildAndGet(protocol) {
    this.build(protocol);
    return this.get();
  }
}

class PTFIWebsite {
  constructor(protocol, port) {
    this.port = port;
    this.protocol = protocol;
    this.server = new ServerBuilder().buildAndGet(protocol);
  }

  run() {
    this.server.listen(this.port, () => {
      console.log(`Server running using ${this.protocol} protocol at ${this.protocol}://localhost:${this.port}`);
    });
  }
}

if (require.main == module) {
  const ARGS = minimist(process.argv.slice(2));
  const PROTOCOL = ARGS.protocol || HTTP_PROTOCOL;
  const PORT = ARGS.port || DEFAULT_PORT;
  
  site = new PTFIWebsite(PROTOCOL, PORT)
  site.run()
}
