#!/bin/bash
sh build_client.sh
sh create_self_signed_certificate.sh

cd ..
npm install
cd shell_scripts
