# api/views.py

from rest_framework import status, views
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .models import ContactInfo
from .serializers import ContactInfoSerializer
from .models import NewsletterSubscriber
from .serializers import NewsletterSubscriberSerializer


class ContactInfoView(views.APIView):
    def get(self, request, *args, **kwargs):
        """
        Retrieve a list of contact information or a specific contact info instance.
        """
        if 'pk' in kwargs:
            try:
                contact_info = ContactInfo.objects.get(pk=kwargs['pk'])
                serializer = ContactInfoSerializer(contact_info)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except ContactInfo.DoesNotExist:
                raise NotFound("ContactInfo not found.")
        else:
            contact_infos = ContactInfo.objects.all()
            serializer = ContactInfoSerializer(contact_infos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        """
        Create a new contact information instance.
        """
        serializer = ContactInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        """
        Update an existing contact information instance.
        """
        try:
            contact_info = ContactInfo.objects.get(pk=kwargs['pk'])
        except ContactInfo.DoesNotExist:
            raise NotFound("ContactInfo not found.")

        serializer = ContactInfoSerializer(contact_info, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        """
        Delete a contact information instance.
        """
        try:
            contact_info = ContactInfo.objects.get(pk=kwargs['pk'])
            contact_info.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ContactInfo.DoesNotExist:
            raise NotFound("ContactInfo not found.")


class NewsletterSubscriberView(views.APIView):
    def get(self, request, *args, **kwargs):
        """
        Retrieve a list of newsletter subscribers or a specific subscriber.
        """
        if 'pk' in kwargs:
            try:
                subscriber = NewsletterSubscriber.objects.get(pk=kwargs['pk'])
                serializer = NewsletterSubscriberSerializer(subscriber)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except NewsletterSubscriber.DoesNotExist:
                raise NotFound("NewsletterSubscriber not found.")
        else:
            subscribers = NewsletterSubscriber.objects.all()
            serializer = NewsletterSubscriberSerializer(subscribers, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        """
        Create a new newsletter subscriber instance.
        """
        serializer = NewsletterSubscriberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        """
        Update an existing newsletter subscriber instance.
        """
        try:
            subscriber = NewsletterSubscriber.objects.get(pk=kwargs['pk'])
        except NewsletterSubscriber.DoesNotExist:
            raise NotFound("NewsletterSubscriber not found.")

        serializer = NewsletterSubscriberSerializer(subscriber, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        """
        Delete a newsletter subscriber instance.
        """
        try:
            subscriber = NewsletterSubscriber.objects.get(pk=kwargs['pk'])
            subscriber.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except NewsletterSubscriber.DoesNotExist:
            raise NotFound("NewsletterSubscriber not found.")
