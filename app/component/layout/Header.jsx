"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdCloseCircle } from "react-icons/io";
import Image from "next/image";
import Logo from "@/image/hh.jpeg";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/who-we-arer", label: "Who We Are" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/location", label: "Location Menu" },
  ];

  return (
    <header className=" bg-white shadow-md">
      <nav
        className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-4 lg:p-6"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/">
            <h1 className="text-xl font-bold text-red-500">Aggarwal Package and Movers</h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <IoMdMenu
              className={`h-6 w-6 text-black ${isMobileMenuOpen ? "hidden" : "block"
                }`}
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg hover:font-semibold leading-6 transition-all duration-300 ${pathname === link.href ? "text-red-600" : "text-gray-900"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-25">
          <div
            className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mr-4"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black"
              >
                <span className="sr-only">Close menu</span>
                <IoMdCloseCircle className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMobileMenu} // Close menu after selection
                  className={`block px-3 py-2 rounded-lg text-base leading-6 transition-all duration-300 ${pathname === link.href ? "text-red-600" : "text-gray-900"
                    } hover:bg-gray-50`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
