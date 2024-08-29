from rest_framework import status, views
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, ValidationError
from bson import ObjectId
from .models import ContactInfo, NewsletterSubscriber
from .serializers import ContactInfoSerializer, NewsletterSubscriberSerializer

def is_valid_object_id(id):
    """Helper function to validate ObjectId format."""
    try:
        ObjectId(id)
        return True
    except Exception:
        return False

class ContactInfoView(views.APIView):
    def get(self, request, pk=None):
        """
        Retrieve a list of contact information or a specific contact info instance.
        """
        if pk:
            if not is_valid_object_id(pk):
                raise ValidationError("Invalid ID format.")
            try:
                contact_info = ContactInfo.objects.get(pk=ObjectId(pk))
                serializer = ContactInfoSerializer(contact_info)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except ContactInfo.DoesNotExist:
                raise NotFound("ContactInfo not found.")
        else:
            contact_infos = ContactInfo.objects.all()
            serializer = ContactInfoSerializer(contact_infos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """
        Create a new contact information instance.
        """
        serializer = ContactInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        """
        Update an existing contact information instance by ID.
        """
        if not is_valid_object_id(pk):
            raise ValidationError("Invalid ID format.")
        try:
            contact_info = ContactInfo.objects.get(pk=ObjectId(pk))
        except ContactInfo.DoesNotExist:
            raise NotFound("ContactInfo not found.")

        serializer = ContactInfoSerializer(contact_info, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        """
        Delete a contact information instance by ID.
        """
        if not is_valid_object_id(pk):
            raise ValidationError("Invalid ID format.")
        
        try:
            contact_info = ContactInfo.objects.get(pk=ObjectId(pk))
            contact_info.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ContactInfo.DoesNotExist:
            raise NotFound("ContactInfo not found.")


class NewsletterSubscriberView(views.APIView):
    def get(self, request, pk=None):
        """
        Retrieve a list of newsletter subscribers or a specific subscriber by ID.
        """
        if pk:
            if not is_valid_object_id(pk):
                raise ValidationError("Invalid ID format.")
            try:
                subscriber = NewsletterSubscriber.objects.get(pk=ObjectId(pk))
                serializer = NewsletterSubscriberSerializer(subscriber)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except NewsletterSubscriber.DoesNotExist:
                raise NotFound("NewsletterSubscriber not found.")
        else:
            subscribers = NewsletterSubscriber.objects.all()
            serializer = NewsletterSubscriberSerializer(subscribers, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """
        Create a new newsletter subscriber instance.
        """
        serializer = NewsletterSubscriberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        """
        Update an existing newsletter subscriber instance by ID.
        """
        if not is_valid_object_id(pk):
            raise ValidationError("Invalid ID format.")
        try:
            subscriber = NewsletterSubscriber.objects.get(pk=ObjectId(pk))
        except NewsletterSubscriber.DoesNotExist:
            raise NotFound("NewsletterSubscriber not found.")

        serializer = NewsletterSubscriberSerializer(subscriber, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        """
        Delete a newsletter subscriber instance by ID.
        """
        if not is_valid_object_id(pk):
            raise ValidationError("Invalid ID format.")
        try:
            subscriber = NewsletterSubscriber.objects.get(pk=ObjectId(pk))
            subscriber.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except NewsletterSubscriber.DoesNotExist:
            raise NotFound("NewsletterSubscriber not found.")
