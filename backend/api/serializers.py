from rest_framework import serializers
from .models import ContactInfo, NewsletterSubscriber
from bson import ObjectId


class ObjectIdField(serializers.Field):
    """
    Custom serializer field to handle MongoDB ObjectIds.
    """
    def to_representation(self, value):
        return str(value)

    def to_internal_value(self, data):
        try:
            return ObjectId(data)
        except Exception as e:
            raise serializers.ValidationError("Invalid ObjectId")


class ContactInfoSerializer(serializers.Serializer):
    id = ObjectIdField(read_only=True)  # MongoDB _id field
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    business_name = serializers.CharField(max_length=200, required=False)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=15, required=False)
    message = serializers.CharField(required=False)

    def create(self, validated_data):
        return ContactInfo(**validated_data).save()

    def update(self, instance, validated_data):
        """
        Update an existing ContactInfo instance with new data.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class NewsletterSubscriberSerializer(serializers.Serializer):
    id = ObjectIdField(read_only=True)  # MongoDB _id field
    email = serializers.EmailField()

    def create(self, validated_data):
        return NewsletterSubscriber(**validated_data).save()

    def update(self, instance, validated_data):
        """
        Update an existing NewsletterSubscriber instance with new data.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
