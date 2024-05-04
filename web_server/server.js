const express = require('express');
const cors = require('cors');
const path = require('path');
const process = require('process');
const minimist = require('minimist');
const https = require("https");
const fs = require("fs");

const args = minimist(process.argv.slice(2));
const PORT = args.port || 5000;
const PROTOCOL = args.protocol || "http";

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cors());
app.use(express.json()); 

if (PROTOCOL === "https") {
  // Create HTTPS server
  const options = {
    key: fs.readFileSync(path.join(__dirname, "ssl/localhost-key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "ssl/localhost.pem")),
  };

  const server = https.createServer(options, app);

  server.listen(PORT, () => {
    console.log(`Server running using https protocol at https://localhost:${PORT}`);
  });
}
else {
  app.listen(PORT, () => {
    console.log(`Server running using http protocol at http://localhost:${PORT}`)
});
}

