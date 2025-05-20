import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicesPageFR() {
  return (
    <div className="pt-24">
      {/* Héros Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            CMR propose des services complets de rénovation de cuisine et de maison, axés sur la qualité, le style et l'accessibilité.
          </p>
        </div>
      </section>

      {/* Rénovation de cuisine */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp"
                alt="Rénovation de cuisine"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Rénovation de cuisine</h2>
              <p className="text-gray-700 mb-6">
                CMR Rénovation & Design met à votre service 60 ans d'expertise combinée en rénovation de cuisine. Nous proposons des comptoirs et armoires de haute qualité, offrant une valeur exceptionnelle au meilleur prix. Confiez-nous la transformation de votre cuisine pour une qualité, un style et une accessibilité imbattables.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Refonte et rénovation complète de cuisine</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Armoires sur mesure et solutions de rangement</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Installation de comptoirs haut de gamme</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Intégration d'appareils modernes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Mise à niveau de l'éclairage et de l'électricité</span>
                </li>
              </ul>
              <Button>Obtenir une soumission</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comptoirs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp"
                alt="Comptoirs"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comptoirs</h2>
              <p className="text-gray-700 mb-6">
                Découvrez notre large gamme de comptoirs et armoires de haute qualité conçus pour sublimer l'esthétique et la fonctionnalité de votre cuisine. Nos produits sont fabriqués avec soin pour garantir durabilité et style pour de nombreuses années.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Matériaux de comptoir haut de gamme (granit, quartz, marbre)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Conception et installation d'armoires sur mesure</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Solutions de rangement innovantes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Sélection de quincaillerie et accessoires</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Conseil sur les finitions et couleurs</span>
                </li>
              </ul>
              <Button>Voir les options</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions de plancher */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/flooring-samples.png"
                alt="Solutions de plancher"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions de plancher</h2>
              <p className="text-gray-700 mb-6">
                Découvrez nos solutions de plancher haut de gamme alliant élégance et durabilité. Du bois franc au stratifié, nous offrons une grande variété d'options pour tous les goûts et tous les styles de vie.
              </p>
              <Button variant="outline">En savoir plus</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rénovation de salle de bain */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/modern-bathroom.png"
                alt="Rénovation de salle de bain"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Rénovation de salle de bain</h2>
              <p className="text-gray-700 mb-6">
                Vivez le luxe et le confort avec nos services sur mesure de rénovation de salle de bain. Des équipements modernes aux espaces spacieux, nous veillons à ce que chaque détail respire l'élégance et la fonctionnalité.
              </p>
              <Button variant="outline">En savoir plus</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation et une soumission gratuite. Notre équipe est prête à réaliser votre vision !
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Obtenir une soumission gratuite
          </Button>
        </div>
      </section>
    </div>
  )
} 