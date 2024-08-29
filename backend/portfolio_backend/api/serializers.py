from rest_framework import serializers
from .models import ContactInfo, NewsletterSubscriber
from bson import ObjectId

class ContactInfoSerializer(serializers.Serializer):
    mongo_id = serializers.SerializerMethodField()  # MongoDB _id field
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=15, required=False)
    message = serializers.CharField()


    def get_mongo_id(self, obj):
        return str(obj.pk)

    def create(self, validated_data):
        return ContactInfo.objects.create(**validated_data)


class NewsletterSubscriberSerializer(serializers.Serializer):
    mongo_id = serializers.SerializerMethodField()  # MongoDB _id field
    email = serializers.EmailField()


    def get_mongo_id(self, obj):
        return str(obj.pk)

    def create(self, validated_data):
        return NewsletterSubscriber.objects.create(**validated_data)
