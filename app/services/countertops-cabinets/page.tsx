import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CountertopsCabinetsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp"
            alt="Countertops and Cabinets"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Countertops</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Elevate your kitchen with our premium countertops and custom cabinetry solutions. Quality materials, expert
            craftsmanship, and stunning designs.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 hover:text-black">
            <Link href="/quote">Get A Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Countertops Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Countertops</h2>
              <p className="text-gray-700 mb-6">
                Explore our wide range of high-quality countertops designed to elevate the aesthetics and functionality
                of your kitchen. Our countertops are crafted from premium materials, ensuring durability, beauty, and
                value for years to come.
              </p>
              <p className="text-gray-700 mb-6">
                We offer a diverse selection of materials to suit every style preference and budget, from luxurious
                natural stone to modern engineered surfaces. Our expert team will guide you through the selection
                process, helping you choose the perfect countertop for your kitchen.
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Countertop Materials:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Granite</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Quartz</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Marble</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Solid Surface</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Butcher Block</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Porcelain</span>
                </div>
              </div>
              <Button>
                <Link href="/countertops/colors">Explore All Colors</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp"
                alt="Premium Countertops"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cabinets Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Cabinetry</h2>
              <p className="text-gray-700 mb-6">
                Our custom cabinet solutions are designed to maximize both storage and style in your kitchen. We offer a
                wide range of styles, finishes, and hardware options to create cabinetry that perfectly complements your
                home's aesthetic while providing the functionality you need.
              </p>
              <p className="text-gray-700 mb-6">
                From traditional to contemporary designs, our skilled craftsmen create cabinets that combine beauty with
                durability. We use high-quality materials and construction techniques to ensure your cabinets will stand
                the test of time.
              </p>
              <h3 className="text-xl font-semibold mb-4">Cabinet Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom designs</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Premium materials</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Soft-close hinges</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Full-extension drawers</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Innovative storage solutions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Designer hardware options</span>
                </div>
              </div>
              <Button>
                <Link href="/quote">Explore Cabinet Options</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp"
                alt="Custom Cabinetry"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Countertop & Cabinet Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp"
                alt="Countertops and Cabinets"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp"
                alt="Countertops and Cabinets"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp"
                alt="Countertops and Cabinets"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg"
                alt="Countertops and Cabinets"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HD-807_Hedleyville_00007-1536x1024.jpg-o398hXmG39tFBjkSumLgcA4PzN0Ami.jpeg"
                alt="Countertops and Cabinets"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/42293505_2109149376011934_6456483929300926464_o.jpg-fUMn2pmCQu7TqAsuBY4b1ZTF10xzDG.jpeg"
                alt="Countertops and Cabinets"
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Consultation & Measurement</h3>
              <p className="text-gray-700">
                We begin with a detailed consultation and precise measurements of your space to ensure a perfect fit for
                your new countertops and cabinets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Material Selection</h3>
              <p className="text-gray-700">
                Our designers work with you to select the perfect materials, colors, and finishes that align with your
                vision and budget.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Fabrication & Preparation</h3>
              <p className="text-gray-700">
                We carefully fabricate your countertops and cabinets to your exact specifications, ensuring the highest
                quality and attention to detail.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Installation</h3>
              <p className="text-gray-700">
                Our skilled installers handle the final installation with precision and care, ensuring a flawless finish
                and proper functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                What is the difference between granite and quartz countertops?
              </h3>
              <p className="text-gray-700">
                Granite is a natural stone with unique patterns, requiring periodic sealing. Quartz is an engineered
                stone made from natural quartz crystals and resin, offering greater consistency in appearance and
                requiring less maintenance.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                How long does it take to install new countertops and cabinets?
              </h3>
              <p className="text-gray-700">
                The timeline varies based on the project scope. Typically, cabinet installation takes 2-5 days, while
                countertop installation takes 1-2 days after cabinets are installed. Custom projects may require
                additional time for fabrication.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Do you offer warranty on your countertops and cabinets?</h3>
              <p className="text-gray-700">
                Yes, we provide warranties on both our products and installation work. Specific warranty terms vary by
                material and manufacturer, but we stand behind the quality of our work and materials.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Can you match my existing cabinetry style?</h3>
              <p className="text-gray-700">
                Yes, our skilled craftsmen can match your existing cabinetry style, color, and finish for seamless
                integration of new elements with your current kitchen design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Kitchen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on premium countertops and custom cabinetry.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/quote">Get A Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
