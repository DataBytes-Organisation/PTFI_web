# Python backend

## Overview

This is a Python based backend intended to use FastAPI. Python 3.12 is recommended as the backend was setup using 3.12.


* Source code is located under ./src
  * The requirements file for the backend is ./requirements.txt
* Pytest unit tests are located under ./tests/unit
  * The requirements file for the unit tests is ./test_requirements.txt

## Installation Steps

A Python virtual environment should be used to develop the backend. If using the provided shell scripts a virtual environment located at ./.venv will be created and used.

A shell script to setup the backend is available under located under PTFI_WEB/shell_scripts. It will create the virtual environment and install the required packages.

```bash
cd shell_scripts
sh sh build_python_backend.sh
```

## Continuous integration

Unit tests have been configured for Pytest. Pylint is used for linting.

A shell script has been created that will install the required packages for Pytest (including providing a coverage report) and Pylint, then run both. These are ran using the python_ci.sh shell script located under PTFI_WEB/shell_scripts

```bash
cd shell_scripts
sh python_ci.sh
```
