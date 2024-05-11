#!/bin/bash
#!/bin/bash
VIRTUAL_ENV=".venv"
cd ../python_backend
python -m venv $VIRTUAL_ENV
source $VIRTUAL_ENV/Scripts/Activate
pip install -r test_requirements.txt
python -m pytest
python -m pylint
cd ../shell_scripts