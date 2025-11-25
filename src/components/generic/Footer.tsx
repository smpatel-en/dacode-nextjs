"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/assets/images/logo.png";
import FooterBackground from "@public/assets/images/footer-bg.png";
import { SlArrowDown } from "react-icons/sl";

const optionGroups: Array<{
  header: string;
  options: Array<{ name: string; href: string }>;
}> = [
  {
    header: "Work",
    options: [
      { name: "Blog", href: "/" },
      { name: "How We Work", href: "/" },
      { name: "Testimonials", href: "/" },
    ],
  },
  {
    header: "Services",
    options: [
      { name: "Marketing Strategy", href: "/" },
      { name: "Website Optimization", href: "/" },
      { name: "Email Marketing", href: "/" },
    ],
  },
  {
    header: "Business Solution",
    options: [
      { name: "Partnership", href: "/" },
      { name: "About Project", href: "/" },
      { name: "Corporate", href: "/" },
    ],
  },
];

const socialLinks: Array<{ name: string; href: string }> = [
  { name: "FB", href: "/" },
  { name: "TW", href: "/" },
  { name: "IG", href: "/" },
  { name: "LI", href: "/" },
];

export default function Footer() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("English");
  const [showDropdown, setShowDropdown] = React.useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(false);
    };
    if (showDropdown) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <footer className="relative">
      {/* Footer Background Image*/}
      <Image
        src={FooterBackground}
        alt="Footer Background"
        className="absolute inset-0 -z-1"
      />
      <div className="container">
        {/* Wrapper */}
        <div className="flex flex-col">
          {/* Top */}
          <div className="mb-12.5 flex flex-col gap-10 xl:flex-row">
            {/* Header */}
            <div className="flex shrink-0 flex-col gap-3 lg:gap-7.5">
              {/* Footer Logo */}
              <Link href="/" className="w-fit">
                <Image
                  src={Logo}
                  alt="dcCode Logo"
                  className="max-w-36 object-contain sm:max-w-42 lg:max-w-none"
                />
              </Link>

              {/* Footer Description */}
              <p className="max-w-100 leading-[30px]">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>

            {/* Body | Grid of Options */}
            <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-5 md:grid-cols-4">
              {/* Option Groups */}
              {optionGroups.map((group) => (
                <div
                  key={group.header}
                  className="flex flex-col gap-2 lg:gap-7"
                >
                  {/* Option Group Header */}
                  <h4>{group.header}</h4>

                  {/* Option Group Options */}
                  <ul className="leading-[30px] has-[a:hover]:[&>li>a:not(:hover)]:blur-[3px]">
                    {group.options.map((option) => (
                      <li key={option.name}>
                        <Link
                          className="text-dark/40 hover:text-dark transition-all duration-300 hover:pl-1"
                          href={option.href}
                        >
                          {option.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col gap-2 lg:gap-7">
                <h4
                  className="inline-flex cursor-pointer items-center gap-2"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Language{" "}
                  <SlArrowDown
                    className={`${showDropdown ? "rotate-180" : ""} transition-transform duration-300`}
                  />
                </h4>

                <ul
                  className={`${showDropdown ? "max-h-30" : "max-h-0"} lg: overflow-hidden leading-[30px] transition-all duration-300 has-[button:hover]:[&>li>button:not(:hover)]:blur-[3px]`}
                >
                  {["English", "Gujarati", "Hindi", "French"].map((lang) => (
                    <li key={lang} className="w-full">
                      <button
                        className={`${lang === selectedLanguage ? "text-dark font-bold" : "text-dark/40"} hover:text-dark/80 text-right transition-all duration-300 hover:pl-1`}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setShowDropdown(false);
                        }}
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t-light/40 flex items-center justify-between gap-2 border-t-2 pt-12.5">
            {/* Copyright */}
            <p>© DaCode. 2020</p>

            {/* Socials */}
            <div className="xs:gap-5 flex gap-3 has-[a:hover]:[&>a:not(:hover)]:blur-[2px]">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-dark hover:text-dark/70 text-base font-bold transition-all duration-300 lg:text-[19px]"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
