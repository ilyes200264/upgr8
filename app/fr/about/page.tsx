import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPageFR() {
  return (
    <div className="pt-24">
      {/* À propos - Héros */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de CMR</h1>
              <h2 className="text-xl font-medium mb-4">60 ans d'expertise combinée en rénovation de cuisine</h2>
              <p className="text-gray-700 mb-6">
                CMR Rénovation & Design met à votre service 60 ans d'expertise combinée en rénovation de cuisine. Nous proposons des comptoirs et armoires de haute qualité, offrant une valeur exceptionnelle au meilleur prix. Confiez-nous la transformation de votre cuisine pour une qualité, un style et une accessibilité imbattables.
              </p>
              <p className="text-gray-700 mb-6">
                Notre équipe de professionnels expérimentés s'engage à fournir un service de premier ordre et à créer des espaces qui dépassent les attentes de nos clients. Nous sommes fiers de notre souci du détail, de notre engagement envers la qualité et de notre passion pour le design innovant.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">60 ans</h4>
                  <p className="text-sm text-gray-600">d'expertise combinée</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Exceptionnelle</h4>
                  <p className="text-sm text-gray-600">Valeur</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Inégalée</h4>
                  <p className="text-sm text-gray-600">Qualité</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg"
                alt="Salon de luxe"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Processus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Notre Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-700">
                Nous commençons par une consultation approfondie pour comprendre votre vision, vos besoins et votre budget pour votre projet de rénovation de cuisine.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Conception</h3>
              <p className="text-gray-700">
                Nos designers créent des plans détaillés et des rendus 3D pour vous aider à visualiser votre nouvelle cuisine avant le début des travaux.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction</h3>
              <p className="text-gray-700">
                Nos artisans qualifiés réalisent les travaux avec précision, garantissant une exécution de qualité et un grand souci du détail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Finalisation</h3>
              <p className="text-gray-700">
                Nous effectuons une visite finale pour nous assurer que tout répond à nos standards élevés et à votre entière satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre cuisine ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation et une soumission gratuite. Réalisons ensemble la cuisine de vos rêves !
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Obtenir une soumission gratuite
          </Button>
        </div>
      </section>
    </div>
  )
} 