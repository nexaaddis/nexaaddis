# api/models.py

from mongoengine import Document, StringField, EmailField, DateTimeField

class ContactInfo(Document):
    first_name = StringField(max_length=100, required=True)
    last_name = StringField(max_length=100, required=True)
    business_name = StringField(max_length=200, required=True)
    email = EmailField(required=True)
    phone = StringField(max_length=15, required=True)
    message = StringField()

    def __str__(self):
        if self.business_name:
            return f"{self.first_name} {self.last_name} ({self.business_name})"
        return f"{self.first_name} {self.last_name}"


class NewsletterSubscriber(Document):
    email = EmailField(required=True, unique=True)
    subscribed_on = DateTimeField(required=True)
