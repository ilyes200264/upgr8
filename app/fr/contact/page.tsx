import ContactForm from "@/components/contact-form"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPageFR() {
  return (
    <div className="pt-24">
      {/* Héros Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Nous serions ravis d'échanger avec vous. Contactez-nous pour une consultation gratuite ou pour en savoir plus sur nos services.
          </p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Nous joindre</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Notre adresse</h3>
                    <p className="text-gray-700">427 RUE CHAMPLAIN, JOLIETTE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Courriel</h3>
                    <p className="text-gray-700">info@groupcmr.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Téléphone</h3>
                    <p className="text-gray-700">514-583-3465</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Heures d'ouverture</h3>
                    <p className="text-gray-700">Lundi - Vendredi : 9h00 - 17h00</p>
                    <p className="text-gray-700">Samedi : 10h00 - 14h00</p>
                    <p className="text-gray-700">Dimanche : 10h00 - 14h00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nous trouver</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg">
            {/* Remplacer par une vraie carte plus tard */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">La carte s'affichera ici</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 