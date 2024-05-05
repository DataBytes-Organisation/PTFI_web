#!/bin/bash
sh build_localhost_web_server.sh
sh run_web_server_unit_tests.sh
node ../web_server/src/main.js --protocol https --port 5050