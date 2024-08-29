# api/models.py

from mongoengine import Document, fields

class ContactInfo(Document):
    name = fields.StringField(required=True)
    email = fields.EmailField(required=True)
    phone = fields.StringField()
    message = fields.StringField()

class NewsletterSubscriber(Document):
    email = fields.EmailField(required=True, unique=True)
    subscribed_on = fields.DateTimeField(auto_now_add=True)
