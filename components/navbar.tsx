"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Animation variants
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    scroll: {
      scale: 0.95,
      transition: { duration: 0.4 }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.2 }
    }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, pointerEvents: "none" as const },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      pointerEvents: "none" as const,
      transition: { duration: 0.2 }
    }
  }

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  }

  // Add subtle decoration elements for kitchen theme
  const Decoration = () => (
    <motion.div 
      className="absolute left-0 right-0 mx-auto z-0 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: 1, 
        opacity: isScrolled ? 0 : 0.6 
      }}
      transition={{ duration: 0.8 }}
    />
  )

  // Services menu items
  const servicesItems = [
    { name: "Kitchen Remodeling", path: "/services/kitchen-remodeling" },
    { name: "Countertops & Cabinets", path: "/services/countertops-cabinets" },
    { name: "Bathroom Renovation", path: "/services/bathroom-renovation" },
    { name: "Flooring Solutions", path: "/services/flooring-solutions" },
    { name: "Interior Design", path: "/services/interior-design" }
  ]

  // Calculate header height based on scroll state
  const headerHeight = isScrolled ? "h-16" : "h-20";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled 
          ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-md py-2" 
          : "bg-black bg-opacity-40 backdrop-blur-sm py-4"
      } flex items-center`}
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Area - Modified for larger logo without increasing header size */}
          <motion.div
            variants={logoVariants}
            animate={isScrolled ? "scroll" : "visible"}
            className="pr-0 md:pr-0 flex-shrink-0 -my-2 relative" // Negative margin to allow overflow
            style={{ 
              zIndex: 10 // Ensure logo is above other elements
            }}
          >
            <Link href="/" className="flex items-center">
              <div className="relative">
                <AnimatePresence mode="wait">
                  {isScrolled ? (
                    <motion.div
                      key="black-logo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/logo-black.png" 
                        alt="Group C.M.R Logo"
                        width={240}
                        height={95}
                        className="h-14 md:h-16 lg:h-20 w-auto transform-gpu"
                        priority
                        style={{ 
                          objectFit: "contain",
                          marginBottom: "-0.5rem",
                          marginTop: "-0.5rem"
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="white-logo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/logo.png" 
                        alt="Group C.M.R Logo"
                        width={240}
                        height={95}
                        className="h-14 md:h-16 lg:h-20 w-auto transform-gpu"
                        priority
                        style={{ 
                          objectFit: "contain",
                          marginBottom: "-0.75rem",
                          marginTop: "-0.75rem"
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Optional: Add a decorative line below the logo that appears when scrolled */}
                {isScrolled && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Adjusted to accommodate bigger logo */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8" ref={dropdownRef}>
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "SERVICES", dropdown: true, items: servicesItems },
              { name: "GALLERY", path: "/gallery" },
              { name: "CONTACT", path: "/contact" }
            ].map((item, i) =>
              item.dropdown ? (
                <motion.div 
                  key={item.name} 
                  variants={navItemVariants}
                  className="relative"
                >
                  <motion.button
                    className={`font-medium ${
                      isScrolled 
                        ? "text-black hover:text-gray-700" 
                        : "text-white hover:text-gray-200"
                    } transition-colors flex items-center space-x-1 py-2`}
                    onClick={() => toggleDropdown(item.name)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <span>{item.name}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className={`absolute left-0 top-full mt-1 py-2 rounded-md shadow-2xl overflow-hidden ${
                          isScrolled 
                            ? "bg-white text-black" 
                            : "bg-black bg-opacity-90 text-white"
                        }`}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ minWidth: "220px" }}
                      >
                        {item.items.map((subItem, j) => (
                          <motion.div
                            key={subItem.name}
                            variants={dropdownItemVariants}
                            whileHover="hover"
                            className="relative"
                          >
                            <Link 
                              href={subItem.path}
                              className={`block px-5 py-2.5 transition-colors whitespace-nowrap ${
                                isScrolled 
                                  ? "hover:bg-gray-100 hover:text-black" 
                                  : "hover:bg-gray-800 hover:text-white"
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex items-center justify-between">
                                <span>{subItem.name}</span>
                                <ChevronRight className="w-4 h-4 opacity-60" />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div 
                  key={item.name} 
                  variants={navItemVariants}
                >
                  <Link
                    href={item.path ?? "/"}
                    className={`font-medium ${
                      isScrolled 
                        ? "text-black hover:text-gray-700" 
                        : "text-white hover:text-gray-200"
                    } transition-colors py-2 px-1 relative overflow-hidden group`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${
                        isScrolled ? "bg-black" : "bg-white"
                      } opacity-0 group-hover:opacity-100 transition-all duration-300`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ 
                        scaleX: 1,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </Link>
                </motion.div>
              )
            )}

            {/* Call-to-action Button */}
            <motion.div variants={navItemVariants}>
              <Link href="/get-a-quote">
                <Button 
                  className={`relative overflow-hidden group ${
                    isScrolled
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -30 }}
                    className="block transition-transform duration-300"
                  >
                    Get A Free Quote
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 30 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Get A Free Quote
                  </motion.span>
                </Button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            variants={navItemVariants}
            whileTap={{ scale: 0.95 }}
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
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-xl overflow-hidden z-40"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col p-6 max-h-[80vh] overflow-y-auto">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "GALLERY", path: "/gallery" },
                { name: "CONTACT", path: "/contact" },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  whileHover="hover"
                  className="border-b border-gray-100 last:border-0"
                >
                  <Link
                    href={item.path}
                    className="font-medium text-black py-4 flex items-center justify-between"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                </motion.div>
              ))}

              {/* Services with expandable submenu */}
              <motion.div
                variants={menuItemVariants}
                className="border-b border-gray-100"
              >
                <motion.button
                  className="font-medium text-black py-4 w-full flex items-center justify-between"
                  onClick={() => toggleDropdown("MOBILE_SERVICES")}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>SERVICES</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === "MOBILE_SERVICES" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "MOBILE_SERVICES" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 overflow-hidden"
                    >
                      {servicesItems.map((subItem) => (
                        <motion.div
                          key={subItem.name}
                          variants={dropdownItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          whileHover="hover"
                        >
                          <Link
                            href={subItem.path}
                            className="block py-3 pl-2 border-l-2 border-gray-200 text-gray-700 hover:text-black hover:border-black transition-colors"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                variants={menuItemVariants}
                className="pt-4"
              >
                <Link href="/get-a-quote" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-medium py-6">
                    GET A FREE QUOTE
                  </Button>
                </Link>
              </motion.div>
              
              {/* Contact information in mobile menu */}
              <motion.div
                variants={menuItemVariants}
                className="mt-6 pt-6 border-t border-gray-100"
              >
                <p className="text-sm text-gray-500 mb-2">Contact us</p>
                <p className="text-black font-medium">438-923-8941</p>
                <p className="text-black font-medium mt-2">info@groupcmr.com</p>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      
      {/* Decorative elements */}
      <Decoration />
    </motion.header>
  )
}