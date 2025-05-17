import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* About Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About GROUP C.M.R</h1>
              <h2 className="text-xl font-medium mb-4">60 Years of Combined Expertise in Kitchen Remodeling</h2>
              <p className="text-gray-700 mb-6">
                Group CMR brings 60 years of combined expertise in kitchen remodeling. We offer high-quality countertops
                and cabinets, delivering exceptional value at the best prices. Let us transform your kitchen with
                unbeatable quality, style, and affordability.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced professionals is dedicated to providing top-notch service and creating spaces
                that exceed our clients' expectations. We take pride in our attention to detail, commitment to quality,
                and passion for innovative design.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">60 Years</h4>
                  <p className="text-sm text-gray-600">of Combined Expertise</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Exceptional</h4>
                  <p className="text-sm text-gray-600">Value</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Unbeatable</h4>
                  <p className="text-sm text-gray-600">Quality</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg"
                alt="Luxury Living Room"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-700">
                We begin with a thorough consultation to understand your vision, needs, and budget for your kitchen
                remodeling project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-700">
                Our designers create detailed plans and 3D renderings to help you visualize your new kitchen before
                construction begins.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction</h3>
              <p className="text-gray-700">
                Our skilled craftsmen execute the plans with precision, ensuring quality workmanship and attention to
                detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Completion</h3>
              <p className="text-gray-700">
                We conduct a final walkthrough to ensure everything meets our high standards and your complete
                satisfaction.
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
            Get A Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
