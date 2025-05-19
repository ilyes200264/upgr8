"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Group C.M.R Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
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
                    Countertops
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
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 p-6 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                className="font-medium text-black hover:text-gray-700 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="font-medium text-black hover:text-gray-700 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <div className="py-2">
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
              </div>
              <Link
                href="/gallery"
                className="font-medium text-black hover:text-gray-700 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                GALLERY
              </Link>
              <Link
                href="/careers"
                className="font-medium text-black hover:text-gray-700 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CAREERS
              </Link>
              <div className="pt-2">
                <Link href="/get-a-quote" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 border-0 py-6 text-base">
                    Get A Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
