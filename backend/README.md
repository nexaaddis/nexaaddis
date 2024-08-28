# Django + MongoDB CRUD API

This guide covers the steps required to set up a Django project with MongoDB as the database and build a CRUD (Create, Read, Update, Delete) API using Django Rest Framework.

## Prerequisites

Ensure you have the following installed:

- Python 3.8+
- pip (Python package installer)
- MongoDB (Running instance)

## Installation Steps

### 1. Install Django

To get started, install Django using pip:

````bash
pip install django

### 2. Install Django rest framework

To create rest APIs we need to install Django rest framework:

```bash
pip install djangorestframework


### 3. install Django CORS headers module.

By default, the Django project comes with a security that blocks requests coming from different domains. To disable this, lets install Django CORS headers module.

```bash
pip install djangorestframework

## To create a Django project
- Open the command prompt in the desired folder and type the command.

```Bash
django-admin start project <name of the project>