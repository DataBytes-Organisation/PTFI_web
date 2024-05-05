const {HTTPSServerBuilder} = require("../../src/server.js");

test("HTTPServerBuilder builds http server", () => {
  builder = new HTTPSServerBuilder();
  console.log(typeof(builder))
  expect(builder).not.toBe(null);
});
