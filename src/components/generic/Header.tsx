"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu5Line } from "react-icons/ri";
import Button from "../core/Button";

import Logo from "@public/assets/images/logo.png";

const navigationLinks: Array<{ name: string; href: string }> = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case", href: "/case" },
  { name: "DaCode Specialists", href: "/specialists" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-light fixed top-0 z-10 w-full py-2">
        <div className="container">
          {/* Navigation Wrapper | Desktop */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/">
              <Image
                className="max-w-36 object-contain sm:max-w-42 lg:max-w-none"
                src={Logo}
                alt="dcCode Logo"
              />
            </Link>

            {/* Navigation Links and CTA*/}
            <div className="flex items-center gap-6 lg:gap-12">
              {/* Navigation Links */}
              <ul className="hidden list-none items-center gap-6 lg:gap-12 xl:flex">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-lg font-black transition-colors duration-300 ${
                        pathname === link.href
                          ? "text-dark"
                          : "text-primary hover:text-dark"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Navigation CTA Wrapper*/}
              <div className="flex items-center gap-4">
                <Button variant="secondary" className="hidden md:block">
                  Request a Quote
                </Button>
                <Button
                  className="block xl:hidden"
                  variant="outline-secondary"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <RiMenu5Line className="text-xl lg:text-2xl" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Wrapper | Mobile | Collapsible */}
        <React.Activity mode={isMobileMenuOpen ? "visible" : "hidden"}>
          {/* Padding Suppressor */}
          <div className="container">
            {/* Wrapper */}
            <div className="mt-2 flex flex-col gap-4 py-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`w-fit text-base font-black transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-dark"
                      : "text-primary hover:text-dark"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="secondary"
                className="mt-2 block w-fit md:hidden"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </React.Activity>
      </header>

      {/* Overlay */}
      <div
        className={`bg-dark/30 fixed inset-0 z-9 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </>
  );
}
