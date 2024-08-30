# build_files.sh
pip install --upgrade pip
pip install -r requirements.txt

# Only run collectstatic if needed
if [ -f "manage.py" ]; then
  python manage.py collectstatic --noinput
fi
