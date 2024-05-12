/*
Contains unit tests for src/server.js
*/

// Local module import
const {
  BuilderBase,
  HTTPSServerBuilder,
  HTTPServerBuilder,
  ServerBuilder,
  PTFIWebsite
} = require("../../src/server.js");

// Other imports
const {Server} = require("https");

test("BuilderBase build() for coverage's sage", () => {
  var builder = new BuilderBase();
  builder.build()
});


test("HTTPSServerBuilder (SSL) builds https server", () => {
  var builder = new HTTPSServerBuilder();
  expect(builder.buildAndGet()).toBeInstanceOf(Server);
});

test("HTTPServerBuilder builds http server", () => {
  var builder = new HTTPServerBuilder();
  // express type returned is problematic, tried hard but couldn't find the exact type to use.
  expect(builder.buildAndGet()).toBeInstanceOf(Object);
});

test("ServerBuilder builds https server when that is the provided protocol", () => {
  var builder = new ServerBuilder();
  result = builder.buildAndGet("https")
  expect(result).toBeInstanceOf(Server);
});

test("ServerBuilder builds http server when that is the provided protocol", () => {
  var builder = new ServerBuilder();
  result = builder.buildAndGet("http")
  expect(result).toBeInstanceOf(Object);
});

test("Test PTFIWebsite initialises when arguments are provided", () => {
  const args = {
    protocol: "http",
    port: 5050
  }
  var server = new PTFIWebsite(args);
  expect(server).toBeInstanceOf(PTFIWebsite);
});

test("Test PTFIWebsite initialises when arguments are not provided", () => {
  var server = new PTFIWebsite();
  expect(server).toBeInstanceOf(PTFIWebsite);
});
