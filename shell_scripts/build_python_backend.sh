#!/bin/bash
VIRTUAL_ENV=".venv"
cd ../python_backend
[ ! -d "./$VIRTUAL_ENV" ] && python -m venv $VIRTUAL_ENV
source $VIRTUAL_ENV/Scripts/Activate
pip install -r requirements.txt
cd ../shell_scripts
