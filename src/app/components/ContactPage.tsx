import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+94 77 123 4567',
      link: 'tel:+94771234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@travelra.lk',
      link: 'mailto:info@travelra.lk',
    },
    {
      icon: MapPin,
      title: 'Office Location',
      content: '123 Galle Road, Colombo 03, Sri Lanka',
      link: '#map',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      content: '+94 77 123 4567',
      link: 'https://wa.me/94771234567',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#FF5F1F] to-[#FFC300] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl">We'd love to hear from you and help plan your perfect journey</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#FF5F1F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-2 text-[#333333]">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-[#FF5F1F] transition-colors"
                >
                  {info.content}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-2 text-[#333333]">Send us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-[#333333]">Name</label>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input-background border-0"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[#333333]">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input-background border-0"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[#333333]">Subject</label>
                  <Input
                    type="text"
                    placeholder="What is your inquiry about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-input-background border-0"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[#333333]">Message</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry or travel plans..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input-background border-0 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Office Info */}
            <div>
              <h2 className="text-3xl mb-2 text-[#333333]">Visit Our Office</h2>
              <p className="text-gray-600 mb-6">
                Stop by our office in Colombo for personalized assistance
              </p>

              {/* Map Placeholder */}
              <div id="map" className="w-full h-[400px] bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7978094451815!2d79.84149931477283!3d6.914678995006965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d3b90e089%3A0xf4e6ff49a1a26a78!2sGalle%20Road%2C%20Colombo!5e0!3m2!1sen!2slk!4v1640000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </div>

              {/* Office Hours */}
              <Card className="p-6">
                <h3 className="mb-4 text-[#333333]">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-[#333333]">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#333333]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-[#333333]">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong className="text-[#FF5F1F]">24/7 Emergency Support:</strong> We're
                    always available for our traveling guests
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94771234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-white" />
      </a>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-center mb-12 text-[#333333]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="mb-2 text-[#333333]">How do I book a tour?</h3>
                <p className="text-gray-600">
                  You can book directly through our website, send us an email, call us, or message
                  us on WhatsApp. Our team will respond within a few hours to confirm your booking.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="mb-2 text-[#333333]">Do you offer custom itineraries?</h3>
                <p className="text-gray-600">
                  Absolutely! We specialize in creating personalized itineraries based on your
                  interests, budget, and timeline. Use our Trip Planner or contact us directly.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="mb-2 text-[#333333]">What's included in the package price?</h3>
                <p className="text-gray-600">
                  Our packages typically include transportation, professional driver/guide,
                  accommodation (where specified), and entrance fees. Meals and personal expenses
                  are usually not included unless stated.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="mb-2 text-[#333333]">What is your cancellation policy?</h3>
                <p className="text-gray-600">
                  We offer flexible cancellation up to 7 days before your tour date for a full
                  refund. Cancellations within 7 days may incur a fee. Contact us for specific
                  details.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
