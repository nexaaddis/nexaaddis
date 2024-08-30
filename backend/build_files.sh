#!/bin/bash

# Check for default Python version available
python3 --version
pip3 --version

# Install dependencies
pip3 install --upgrade pip
pip3 install -r requirements.txt

# Collect static files if Django is configured
if [ -f "manage.py" ]; then
  python3 manage.py collectstatic --noinput
fi
