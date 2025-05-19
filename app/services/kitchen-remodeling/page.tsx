import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function KitchenRemodelingPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp"
            alt="Kitchen Remodeling"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Kitchen Remodeling</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Transform your kitchen with our expert remodeling services. We combine functionality, style, and quality
            craftsmanship to create the kitchen of your dreams.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 hover:text-black">
            <Link href="/quote">Get A Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Kitchen Remodeling Services</h2>
              <p className="text-gray-700 mb-6">
                CMR Renovation & Design brings 60 years of combined expertise in kitchen remodeling. We offer high-quality countertops
                and cabinets, delivering exceptional value at the best prices. Let us transform your kitchen with
                unbeatable quality, style, and affordability.
              </p>
              <p className="text-gray-700 mb-6">
                Our comprehensive kitchen remodeling services are designed to handle every aspect of your project, from
                initial design to final installation. We work closely with you to understand your vision, needs, and
                budget, ensuring a seamless and stress-free remodeling experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Complete kitchen redesign</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom cabinetry</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Premium countertops</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Flooring installation</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Lighting solutions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Appliance integration</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Plumbing & electrical</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Designer services included</span>
                </div>
              </div>
              <Button>
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/modern-kitchen.png"
                alt="Kitchen Remodeling"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Kitchen Remodeling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Consultation & Design</h3>
              <p className="text-gray-700 mb-4">
                We begin with a thorough consultation to understand your vision, needs, and budget. Our designers then
                create detailed plans and 3D renderings to help you visualize your new kitchen.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Material Selection</h3>
              <p className="text-gray-700 mb-4">
                We guide you through selecting the perfect materials for your kitchen, from countertops and cabinets to
                flooring and fixtures, ensuring they align with your style and budget.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Construction & Installation</h3>
              <p className="text-gray-700 mb-4">
                Our skilled craftsmen execute the plans with precision, handling demolition, construction, and
                installation with minimal disruption to your home and routine.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Final Inspection & Handover</h3>
              <p className="text-gray-700 mb-4">
                We conduct a thorough inspection to ensure everything meets our high standards and your complete
                satisfaction before officially handing over your beautiful new kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Kitchen Transformations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp"
                alt="Kitchen Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp"
                alt="Kitchen Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp"
                alt="Kitchen Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg"
                alt="Kitchen Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HD-807_Hedleyville_00007-1536x1024.jpg-o398hXmG39tFBjkSumLgcA4PzN0Ami.jpeg"
                alt="Kitchen Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/42293505_2109149376011934_6456483929300926464_o.jpg-fUMn2pmCQu7TqAsuBY4b1ZTF10xzDG.jpeg"
                alt="Kitchen Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Link href="/gallery" className="flex items-center">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a kitchen remodel typically take?</h3>
              <p className="text-gray-700">
                The duration of a kitchen remodel depends on the scope of the project. A minor remodel might take 4-6
                weeks, while a major renovation could take 8-12 weeks. We provide a detailed timeline during the
                consultation phase.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Can I use my kitchen during the remodeling process?</h3>
              <p className="text-gray-700">
                During most of the remodeling process, your kitchen will be partially or completely unusable. We help
                clients set up temporary kitchen spaces and plan the project to minimize inconvenience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What is the typical cost of a kitchen remodel?</h3>
              <p className="text-gray-700">
                Kitchen remodeling costs vary widely based on size, materials, and scope. Minor remodels might start
                around $15,000, while major renovations can exceed $50,000. We provide detailed, transparent quotes
                tailored to your specific project.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you handle all aspects of the remodeling process?</h3>
              <p className="text-gray-700">
                Yes, we provide comprehensive kitchen remodeling services, handling everything from design and
                demolition to installation and finishing touches. This includes plumbing, electrical work, flooring,
                cabinetry, countertops, and appliance installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your dream kitchen to life!
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/quote">Get A Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
