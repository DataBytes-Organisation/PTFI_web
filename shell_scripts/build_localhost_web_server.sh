#!/bin/bash
sh build_client.sh
sh create_self_signed_certificate.sh

cd ../web_server
npm install
cd ../shell_scripts
