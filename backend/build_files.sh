#!/bin/bash

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Collect static files if Django is configured
# if [ -f "manage.py" ]; then
#   python manage.py collectstatic --noinput
# fi
