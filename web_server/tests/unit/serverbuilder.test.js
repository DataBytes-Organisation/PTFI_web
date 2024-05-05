const {HTTPSServerBuilder} = require("../../src/server.js");
const https = require("https");

test("HTTPServerBuilder builds http server", () => {
  builder = new HTTPSServerBuilder();
  console.log(typeof(builder))
  expect(builder.buildAndGet()).toBeInstanceOf(https.Server);
});
