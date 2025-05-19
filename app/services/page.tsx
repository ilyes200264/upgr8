import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Services Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Group C.M.R offers comprehensive kitchen and home remodeling services with a focus on quality, style, and
            affordability.
          </p>
        </div>
      </section>

      {/* Kitchen Remodeling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp"
                alt="Kitchen Remodeling"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Kitchen Remodeling</h2>
              <p className="text-gray-700 mb-6">
                CMR Renovation & Design brings 60 years of combined expertise in kitchen remodeling. We offer high-quality countertops
                and cabinets, delivering exceptional value at the best prices. Let us transform your kitchen with
                unbeatable quality, style, and affordability.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Complete kitchen redesign and renovation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom cabinetry and storage solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Premium countertop installation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Modern appliance integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Lighting and electrical upgrades</span>
                </li>
              </ul>
              <Button>Request a Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countertops and Cabinets */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp"
                alt="Countertops and Cabinets"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Countertops and Cabinets</h2>
              <p className="text-gray-700 mb-6">
                Explore our wide range of high-quality countertops and cabinets designed to elevate the aesthetics and
                functionality of your kitchen. Our products are crafted to perfection, ensuring durability and style for
                years to come.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Premium countertop materials (granite, quartz, marble)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom cabinet design and installation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Innovative storage solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Hardware and fixture selection</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Finish and color consultation</span>
                </li>
              </ul>
              <Button>Explore Options</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoframe_7673-QUf37KuZlHdqOwc4blXKV7ANd4Njo2.png"
                alt="Interior Design"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Interior Design</h2>
              <p className="text-gray-700 mb-6">
                Transform your home interior with our expert design services. We specialize in creating functional and
                stylish spaces that reflect your personality and lifestyle. Let us bring your vision to life with our
                professional interior design solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Comprehensive space planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Color scheme and material selection</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Furniture and accessory recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Lighting design and implementation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom design elements</span>
                </li>
              </ul>
              <Button>Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Flooring Solutions</h3>
              <p className="text-gray-700 mb-6">
                Discover our premium flooring solutions that combine elegance and durability. From hardwood to laminate,
                we offer a diverse selection of flooring options to suit your taste and lifestyle.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Bathroom Renovation</h3>
              <p className="text-gray-700 mb-6">
                Experience luxury and comfort with our custom bathroom renovation services. From modern fixtures to
                spacious layouts, we ensure that every aspect of your bathroom exudes elegance and functionality.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to bring your vision to life!
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Get A Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
