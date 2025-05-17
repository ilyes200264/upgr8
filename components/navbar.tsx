"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-black bg-opacity-30 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
            Group C.M.R
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"} transition-colors`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`font-medium ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"} transition-colors`}
            >
              ABOUT US
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`font-medium ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"} transition-colors flex items-center`}
              >
                SERVICES <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services/kitchen-remodeling" className="w-full">
                    Kitchen Remodeling
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/countertops-cabinets" className="w-full">
                    Countertops & Cabinets
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/interior-design" className="w-full">
                    Interior Design
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/flooring-solutions" className="w-full">
                    Flooring Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/bathroom-renovation" className="w-full">
                    Bathroom Renovation
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/gallery"
              className={`font-medium ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"} transition-colors`}
            >
              GALLERY
            </Link>
            <Link
              href="/careers"
              className={`font-medium ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"} transition-colors`}
            >
              CAREERS
            </Link>
            <Link href="#contact">
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={isScrolled ? "" : "text-white border-white hover:bg-white hover:text-black"}
              >
                Get A Free Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-black hover:text-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="font-medium text-black hover:text-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <div>
                <Link
                  href="/services"
                  className="font-medium text-black hover:text-gray-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SERVICES
                </Link>
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/services/kitchen-remodeling"
                    className="block font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kitchen Remodeling
                  </Link>
                  <Link
                    href="/services/countertops-cabinets"
                    className="block font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Countertops & Cabinets
                  </Link>
                  <Link
                    href="/services/interior-design"
                    className="block font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Interior Design
                  </Link>
                  <Link
                    href="/services/flooring-solutions"
                    className="block font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Flooring Solutions
                  </Link>
                  <Link
                    href="/services/bathroom-renovation"
                    className="block font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bathroom Renovation
                  </Link>
                </div>
              </div>
              <Link
                href="/gallery"
                className="font-medium text-black hover:text-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                GALLERY
              </Link>
              <Link
                href="/careers"
                className="font-medium text-black hover:text-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CAREERS
              </Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Get A Free Quote</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
