import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FlooringSolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3_hu32c6f63a30c82903d9ae8073d6253fa7_16397667_1000x0_resize_q90_h2_lanczos-PM7Ivo4ilwh8AGn72kz9O6aaGdAIyA.webp"
            alt="Flooring Solutions"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Flooring Solutions</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Discover our premium flooring solutions that combine elegance and durability. From hardwood to laminate, we
            offer a diverse selection of flooring options to suit your taste and lifestyle.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Flooring Solutions</h2>
              <p className="text-gray-700 mb-6">
                At Group C.M.R, we offer a comprehensive range of high-quality flooring solutions designed to enhance
                the beauty, comfort, and value of your home. Our expert team guides you through the selection process,
                helping you choose the perfect flooring that aligns with your aesthetic preferences, functional needs,
                and budget.
              </p>
              <p className="text-gray-700 mb-6">
                From classic hardwood to modern luxury vinyl, our diverse selection of premium flooring materials
                ensures that you'll find the perfect option for every room in your home. We handle everything from
                selection to installation, ensuring a seamless experience and exceptional results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Expert installation</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Premium materials</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Diverse selection</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Competitive pricing</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Long-lasting durability</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Warranty protection</span>
                </div>
              </div>
              <Button>
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3_hu32c6f63a30c82903d9ae8073d6253fa7_16397667_1000x0_resize_q90_h2_lanczos-PM7Ivo4ilwh8AGn72kz9O6aaGdAIyA.webp"
                alt="Flooring Solutions"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flooring Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Flooring Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Hardwood Flooring</h3>
              <p className="text-gray-700 mb-6">
                Classic, elegant, and timeless, hardwood flooring adds warmth and value to any home. Available in
                various wood species, finishes, and plank widths to suit your style.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Solid & engineered options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Multiple wood species</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Various finishes available</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Luxury Vinyl Flooring</h3>
              <p className="text-gray-700 mb-6">
                Combining the beauty of natural materials with exceptional durability and water resistance, luxury vinyl
                is perfect for busy households and moisture-prone areas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Waterproof options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Realistic wood & stone looks</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Easy maintenance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Laminate Flooring</h3>
              <p className="text-gray-700 mb-6">
                A cost-effective option that mimics the look of hardwood while offering excellent durability and scratch
                resistance, ideal for high-traffic areas and homes with children or pets.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Scratch-resistant surface</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Budget-friendly options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Easy installation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tile Flooring</h3>
              <p className="text-gray-700 mb-6">
                Versatile, durable, and water-resistant, tile flooring is perfect for kitchens, bathrooms, and other
                moisture-prone areas. Available in countless styles, colors, and patterns.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Ceramic & porcelain options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Waterproof & stain-resistant</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Endless design possibilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Carpet Flooring</h3>
              <p className="text-gray-700 mb-6">
                Soft, warm, and comfortable underfoot, carpet adds coziness and sound absorption to bedrooms, living
                rooms, and other spaces where comfort is a priority.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Various pile heights & textures</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Stain-resistant options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Excellent sound insulation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Specialty Flooring</h3>
              <p className="text-gray-700 mb-6">
                From eco-friendly cork and bamboo to luxurious natural stone, we offer specialty flooring options for
                unique design preferences and specific functional requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Cork & bamboo options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Natural stone selections</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom design capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Consultation & Measurement</h3>
              <p className="text-gray-700">
                We begin with a thorough consultation to understand your needs and preferences, followed by precise
                measurements of your space to ensure accurate material estimates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Material Selection</h3>
              <p className="text-gray-700">
                Our experts guide you through selecting the perfect flooring material, considering factors like
                aesthetics, durability, maintenance, and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Installation</h3>
              <p className="text-gray-700">
                Our skilled installers handle the installation process with precision and care, ensuring proper
                preparation, installation techniques, and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Final Inspection & Care</h3>
              <p className="text-gray-700">
                We conduct a thorough inspection to ensure perfect installation and provide you with detailed care
                instructions to maintain the beauty and longevity of your new floors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Flooring Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3_hu32c6f63a30c82903d9ae8073d6253fa7_16397667_1000x0_resize_q90_h2_lanczos-PM7Ivo4ilwh8AGn72kz9O6aaGdAIyA.webp"
                alt="Flooring Project"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/42293505_2109149376011934_6456483929300926464_o.jpg-fUMn2pmCQu7TqAsuBY4b1ZTF10xzDG.jpeg"
                alt="Flooring Project"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp"
                alt="Flooring Project"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg"
                alt="Flooring Project"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg"
                alt="Flooring Project"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HD-807_Hedleyville_00007-1536x1024.jpg-o398hXmG39tFBjkSumLgcA4PzN0Ami.jpeg"
                alt="Flooring Project"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What flooring is best for high-traffic areas?</h3>
              <p className="text-gray-700">
                For high-traffic areas, we recommend durable options like luxury vinyl plank, laminate, or porcelain
                tile. These materials resist scratches, dents, and wear while maintaining their appearance over time.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">How long does flooring installation take?</h3>
              <p className="text-gray-700">
                Installation time varies based on the type of flooring and the size of the area. Most residential
                projects can be completed in 1-3 days, but larger or more complex installations may take longer.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Do I need to remove my old flooring first?</h3>
              <p className="text-gray-700">
                In most cases, yes. We typically remove existing flooring to ensure proper installation of the new
                material. However, some flooring types can be installed over existing surfaces in certain circumstances.
                We'll assess your specific situation during the consultation.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What's the most pet-friendly flooring option?</h3>
              <p className="text-gray-700">
                Luxury vinyl plank, laminate, and tile are excellent choices for homes with pets. These materials resist
                scratches, are easy to clean, and many are waterproof or water-resistant, making them ideal for
                pet-related accidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Floors?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let our experts help you find the perfect flooring
            solution for your home.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/quote">Get A Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
