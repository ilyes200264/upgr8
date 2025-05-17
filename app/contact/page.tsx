import ContactForm from "@/components/contact-form"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Contact Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for a free consultation or to learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Our Location</h3>
                    <p className="text-gray-700">427 RUE CHAMPLAIN, JOLIETTE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email Us</h3>
                    <p className="text-gray-700">info@groupcmr.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Call Us</h3>
                    <p className="text-gray-700">438-923-8941</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg">
            {/* Replace with actual map integration */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
