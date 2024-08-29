# api/serializers.py

from rest_framework import serializers
from .models import ContactInfo, NewsletterSubscriber

class ContactInfoSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=15, required=False)
    message = serializers.CharField()

    def create(self, validated_data):
        return ContactInfo.objects.create(**validated_data)

class NewsletterSubscriberSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def create(self, validated_data):
        return NewsletterSubscriber.objects.create(**validated_data)
