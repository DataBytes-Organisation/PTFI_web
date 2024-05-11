#!/bin/bash
VIRTUAL_ENV=".venv"
cd ../python_backend
[ ! -d "./$VIRTUAL_ENV" ] && python -m venv $VIRTUAL_ENV
source $VIRTUAL_ENV/Scripts/Activate
pip install -r test_requirements.txt
coverage run -m pytest
coverage report -m
python -m pylint ./src --fail-under=8
python -m pylint ./tests --fail-under=8
cd ../shell_scripts
