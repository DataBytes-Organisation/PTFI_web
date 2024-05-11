#!/bin/bash
VIRTUAL_ENV=".venv"
cd ../python_backend
python -m venv $VIRTUAL_ENV
source $VIRTUAL_ENV/Scripts/Activate
pip install -r requiremements.txt
cd ../shell_scripts
