#!/bin/bash
mkdir -p ../ssl
openssl genrsa -out ../ssl/localhost-key.pem 2048
openssl req -new -x509 -sha256 -config certificate.conf -key ../ssl/localhost-key.pem -out ../ssl/localhost.pem -days 365
