"use client"

import ParallaxHero from "@/components/parallax-hero"
import AnimatedText from "@/components/animated-text"
import ScrollAnimation from "@/components/scroll-animation"
import AnimatedButton from "@/components/animated-button"
import AnimatedGallery from "@/components/animated-gallery"
import { motion } from "framer-motion"

export default function ExampleAnimatedPage() {
  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp",
      alt: "Kitchen Design",
    },
    {
      src: "/images/modern-kitchen.png",
      alt: "Modern Kitchen Design",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp",
      alt: "Kitchen Design",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg",
      alt: "Kitchen Design",
    },
    {
      src: "/images/interior-design.png",
      alt: "Interior Design",
    },
    {
      src: "/images/modern-bathroom.png",
      alt: "Modern Bathroom Design",
    },
  ]

  return (
    <div className="pt-24">
      <ParallaxHero imageUrl="/images/modern-kitchen.png">
        <div className="text-center">
          <AnimatedText
            text="Discover Our Animated Experience"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          />
          <ScrollAnimation delay={0.5}>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Experience our website with beautiful animations that bring our content to life.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.8}>
            <AnimatedButton href="/get-a-quote" variant="secondary" size="lg">
              Get Started
            </AnimatedButton>
          </ScrollAnimation>
        </div>
      </ParallaxHero>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Gallery</h2>
          </ScrollAnimation>
          <AnimatedGallery images={galleryImages} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Features</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <motion.div
                    className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4">Feature {item}</h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia,
                    nisl nisl aliquam nisl.
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.3}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's bring your vision to life!
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.6}>
            <AnimatedButton href="/get-a-quote" variant="secondary" size="lg">
              Get A Free Quote
            </AnimatedButton>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
