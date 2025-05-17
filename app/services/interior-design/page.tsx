import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function InteriorDesignPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoframe_7673-QUf37KuZlHdqOwc4blXKV7ANd4Njo2.png"
            alt="Interior Design"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Interior Design</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Transform your home with our expert interior design services. We create functional, stylish spaces that
            reflect your personality and enhance your lifestyle.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Interior Design Services</h2>
              <p className="text-gray-700 mb-6">
                Transform your home interior with our expert design services. We specialize in creating functional and
                stylish spaces that reflect your personality and lifestyle. Let us bring your vision to life with our
                professional interior design solutions.
              </p>
              <p className="text-gray-700 mb-6">
                Our comprehensive approach to interior design considers every aspect of your space, from layout and
                functionality to color schemes, materials, and decorative elements. We work closely with you to
                understand your preferences, needs, and budget, ensuring a result that exceeds your expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Space planning & layout</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Color & material selection</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Furniture recommendations</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Lighting design</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom design elements</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Accessory & art curation</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Project management</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>3D visualization</span>
                </div>
              </div>
              <Button>
                <Link href="/quote">Request a Consultation</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg"
                alt="Interior Design"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Residential Design</h3>
              <p className="text-gray-700 mb-6">
                Transform your home with our comprehensive residential design services. We create cohesive, functional,
                and beautiful living spaces tailored to your lifestyle and preferences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Full home design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Single room makeovers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Space optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Kitchen & Bath Design</h3>
              <p className="text-gray-700 mb-6">
                Specialized design services for the most important rooms in your home. We combine functionality with
                style to create kitchens and bathrooms that are both practical and beautiful.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Layout optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Material selection</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Fixture coordination</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Color & Material Consultation</h3>
              <p className="text-gray-700 mb-6">
                Expert guidance on selecting the perfect colors, materials, and finishes for your space. We create
                harmonious palettes that reflect your style and enhance your home's architecture.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Color scheme development</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Material board creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Finish selection</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Furniture & Decor Selection</h3>
              <p className="text-gray-700 mb-6">
                We help you select the perfect furniture and decorative elements that align with your style, budget, and
                functional needs, creating a cohesive and inviting space.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom furniture sourcing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Accessory curation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Art & decor placement</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Lighting Design</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive lighting solutions that enhance the ambiance, functionality, and aesthetic appeal of your
                space, combining ambient, task, and accent lighting.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Lighting plan development</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Fixture selection</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Smart lighting integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3D Visualization</h3>
              <p className="text-gray-700 mb-6">
                See your space before it's built with our detailed 3D renderings and visualizations, allowing you to
                make informed decisions and adjustments during the design process.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Photorealistic renderings</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Virtual walkthroughs</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Design concept visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Consultation</h3>
              <p className="text-gray-700">
                We begin with an in-depth consultation to understand your vision, needs, lifestyle, and budget. This
                helps us create a design direction that aligns perfectly with your expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Concept Development</h3>
              <p className="text-gray-700">
                Our designers create detailed concept boards, space plans, and 3D visualizations to bring your vision to
                life, allowing you to see and approve the design direction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Design Implementation</h3>
              <p className="text-gray-700">
                Once the concept is approved, we handle all aspects of implementation, from ordering materials and
                furnishings to coordinating with contractors and craftsmen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Final Styling</h3>
              <p className="text-gray-700">
                We complete your space with careful styling and placement of accessories, art, and decorative elements,
                ensuring every detail contributes to the overall design vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Design Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoframe_7673-QUf37KuZlHdqOwc4blXKV7ANd4Njo2.png"
                alt="Interior Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg"
                alt="Interior Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/42293505_2109149376011934_6456483929300926464_o.jpg-fUMn2pmCQu7TqAsuBY4b1ZTF10xzDG.jpeg"
                alt="Interior Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp"
                alt="Interior Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp"
                alt="Interior Design"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg"
                alt="Interior Design"
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The interior design team at Group CMR transformed our living space beyond our expectations. Their
                attention to detail and ability to understand our style was impressive."
              </p>
              <p className="font-medium">M. TREMBLAY</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Working with Group CMR's design team was a pleasure from start to finish. They listened to our needs
                and created a space that perfectly reflects our lifestyle and taste."
              </p>
              <p className="font-medium">S. LAVOIE</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The 3D visualizations were incredibly helpful in making decisions. The final result matched the
                renderings perfectly, and we couldn't be happier with our new space."
              </p>
              <p className="font-medium">J. BERGERON</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free design consultation. Let our experts help you create a space that reflects your
            style and enhances your lifestyle.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/quote">Get A Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
