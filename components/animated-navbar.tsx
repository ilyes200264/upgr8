"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-black bg-opacity-30 py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className={`text-xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
              Group C.M.R
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              {
                name: "SERVICES",
                dropdown: true,
                items: [
                  { name: "Kitchen Remodeling", path: "/services/kitchen-remodeling" },
                  { name: "Countertops", path: "/services/countertops-cabinets" },
                  { name: "Interior Design", path: "/services/interior-design" },
                  { name: "Flooring Solutions", path: "/services/flooring-solutions" },
                  { name: "Bathroom Renovation", path: "/services/bathroom-renovation" },
                ],
              },
              { name: "GALLERY", path: "/gallery" },
              { name: "CAREERS", path: "/careers" },
            ].map((item, i) =>
              item.dropdown ? (
                <motion.div key={item.name} custom={i} variants={navItemVariants} initial="hidden" animate="visible">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`font-medium ${
                        isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
                      } transition-colors flex items-center`}
                    >
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.name}>
                          <Link href={subItem.path} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ) : (
                <motion.div key={item.name} custom={i} variants={navItemVariants} initial="hidden" animate="visible">
                  <Link
                    href={item.path}
                    className={`font-medium ${
                      isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
                    } transition-colors`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ),
            )}
            <motion.div custom={5} variants={navItemVariants} initial="hidden" animate="visible">
              <Link href="/get-a-quote">
                <Button
                  className={
                    isScrolled
                      ? "bg-black text-white hover:bg-gray-800 border-0"
                      : "bg-white text-black hover:bg-gray-100 hover:text-black border-0"
                  }
                >
                  Get A Free Quote
                </Button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col space-y-4 p-6 max-h-[80vh] overflow-y-auto">
                <motion.div variants={mobileItemVariants}>
                  <Link
                    href="/"
                    className="font-medium text-black hover:text-gray-700 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </motion.div>
                <motion.div variants={mobileItemVariants}>
                  <Link
                    href="/about"
                    className="font-medium text-black hover:text-gray-700 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT US
                  </Link>
                </motion.div>
                <motion.div variants={mobileItemVariants} className="py-2">
                  <div className="font-medium text-black mb-2">SERVICES</div>
                  <div className="pl-4 space-y-3">
                    <Link
                      href="/services/kitchen-remodeling"
                      className="block font-medium text-gray-600 hover:text-black transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Kitchen Remodeling
                    </Link>
                    <Link
                      href="/services/countertops-cabinets"
                      className="block font-medium text-gray-600 hover:text-black transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Countertops
                    </Link>
                    <Link
                      href="/services/interior-design"
                      className="block font-medium text-gray-600 hover:text-black transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Interior Design
                    </Link>
                    <Link
                      href="/services/flooring-solutions"
                      className="block font-medium text-gray-600 hover:text-black transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Flooring Solutions
                    </Link>
                    <Link
                      href="/services/bathroom-renovation"
                      className="block font-medium text-gray-600 hover:text-black transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Bathroom Renovation
                    </Link>
                  </div>
                </motion.div>
                <motion.div variants={mobileItemVariants}>
                  <Link
                    href="/gallery"
                    className="font-medium text-black hover:text-gray-700 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    GALLERY
                  </Link>
                </motion.div>
                <motion.div variants={mobileItemVariants}>
                  <Link
                    href="/careers"
                    className="font-medium text-black hover:text-gray-700 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CAREERS
                  </Link>
                </motion.div>
                <motion.div variants={mobileItemVariants} className="pt-2">
                  <Link href="/get-a-quote" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-black text-white hover:bg-gray-800 border-0 py-6 text-base">
                      Get A Free Quote
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
