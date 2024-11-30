#!/bin/bash
TARGET_DIR=../web_server/ssl
mkdir -p $TARGET_DIR
openssl genrsa -out $TARGET_DIR/localhost-key.pem 2048
openssl req -new -x509 -sha256 -config certificate.conf -key $TARGET_DIR/localhost-key.pem -out $TARGET_DIR/localhost.pem -days 365
