# api/tests.py

from django.test import TestCase
from mongoengine import connect, disconnect
from .models import ContactInfo, NewsletterSubscriber

class ContactInfoModelTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        # Connect to MongoDB for testing
        connect(
            db='test_portfolio_db',  # Use a separate test database
            host='mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority'
        )

    @classmethod
    def tearDownClass(cls):
        # Disconnect from MongoDB
        disconnect()
        super().tearDownClass()

    def setUp(self):
        # Create sample data
        self.contact = ContactInfo.objects.create(
            name="John Doe",
            email="john.doe@example.com",
            phone="123-456-7890",
            message="Hello, world!"
        )

    def test_create_contact_info(self):
        """Test creating a new ContactInfo document."""
        contact = ContactInfo.objects.create(
            name="Jane Doe",
            email="jane.doe@example.com",
            phone="098-765-4321",
            message="Hi there!"
        )
        self.assertEqual(ContactInfo.objects.count(), 2)
        self.assertEqual(contact.name, "Jane Doe")

    def test_read_contact_info(self):
        """Test reading a ContactInfo document."""
        contact = ContactInfo.objects.get(email="john.doe@example.com")
        self.assertEqual(contact.name, "John Doe")

    def test_update_contact_info(self):
        """Test updating a ContactInfo document."""
        self.contact.update(set__message="Updated message")
        updated_contact = ContactInfo.objects.get(email="john.doe@example.com")
        self.assertEqual(updated_contact.message, "Updated message")

    def test_delete_contact_info(self):
        """Test deleting a ContactInfo document."""
        self.contact.delete()
        self.assertEqual(ContactInfo.objects.count(), 0)

class NewsletterSubscriberModelTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        # Connect to MongoDB for testing
        connect(
            db='test_portfolio_db',  # Use a separate test database
            host='mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority'
        )

    @classmethod
    def tearDownClass(cls):
        # Disconnect from MongoDB
        disconnect()
        super().tearDownClass()

    def setUp(self):
        # Create sample data
        self.subscriber = NewsletterSubscriber.objects.create(
            email="subscriber@example.com"
        )

    def test_create_newsletter_subscriber(self):
        """Test creating a new NewsletterSubscriber document."""
        subscriber = NewsletterSubscriber.objects.create(
            email="new.subscriber@example.com"
        )
        self.assertEqual(NewsletterSubscriber.objects.count(), 2)
        self.assertEqual(subscriber.email, "new.subscriber@example.com")

    def test_read_newsletter_subscriber(self):
        """Test reading a NewsletterSubscriber document."""
        subscriber = NewsletterSubscriber.objects.get(email="subscriber@example.com")
        self.assertEqual(subscriber.email, "subscriber@example.com")

    def test_delete_newsletter_subscriber(self):
        """Test deleting a NewsletterSubscriber document."""
        self.subscriber.delete()
        self.assertEqual(NewsletterSubscriber.objects.count(), 0)
