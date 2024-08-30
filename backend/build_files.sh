#!/bin/bash

# Upgrade pip and install dependencies using Python 3.8
python3.8 -m pip install --upgrade pip
python3.8 -m pip install -r requirements.txt

# Collect static files if needed
if [ -f "manage.py" ]; then
  python3.8 manage.py collectstatic --noinput
fi
