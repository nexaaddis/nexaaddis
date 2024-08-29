# api/urls.py

from django.urls import path
from .views import ContactInfoView, NewsletterSubscriberView

urlpatterns = [
    path('contact/', ContactInfoView.as_view(), name='contact_info'),
    path('subscribe/', NewsletterSubscriberView.as_view(), name='newsletter_subscribe'),
]
