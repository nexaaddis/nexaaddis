#!/bin/bash

# Ensure pip3 is available and up-to-date
pip3 install --upgrade pip

# Install dependencies
pip3 install -r requirements.txt

# Collect static files if Django is configured
if [ -f "manage.py" ]; then
  python3 manage.py collectstatic --noinput
fi