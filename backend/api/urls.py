from django.urls import path
from .views import ContactInfoView, NewsletterSubscriberView

urlpatterns = [
    path('contact', ContactInfoView.as_view(), name='contact_info_list'),
    path('contact/<str:pk>', ContactInfoView.as_view(), name='contact_info_detail'),
    path('subscribe', NewsletterSubscriberView.as_view(), name='newsletter_subscribe_list'),
    path('subscribe/<str:pk>', NewsletterSubscriberView.as_view(), name='newsletter_subscribe_detail'),
]
