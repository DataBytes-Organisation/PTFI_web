# Shell Scripts

This directory contains shell (bash)scripts related to building and running the PTFI website.

For the scripts to run correctly they expected the working directory to be this one shell scripts. To call a script use the command sh then the script name.

IE. If current working directory is the project root and you wish to build then run the server.

```bash
cd shell_scripts
sh build_and_run_localhost_server.sh
```

|Script|Description|
|---|---|
|build_and_run_localhost_web_server.sh|Calls build_localhost_server.sh, run_web_server_unit_tests.shand gets the NodeJS server running with https on port 5050|
|build_client.sh|Installs node packages for and builds the React application that is served by the NodeJS server.|
|build_localhost_web_server.sh|Calls build_client and create_self_signed_certificate.sh, then runs npm install for the NodeJS server.|
|create_self_signed_certificate.sh|This script creates a self signed certificate to server the site locally using https.|
|run_web_server_unit_tests.sh|Runs unit tests for the NodeJS web server and provides coverage report.|
