import Link from "next/link";
import Image from "next/image";
import Logo from "@public/assets/images/logo.png";
import FooterBackground from "@public/assets/images/footer-bg.png";

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
            <div className="flex shrink-0 flex-col gap-7.5">
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
                  <ul className="leading-[30px]">
                    {group.options.map((option) => (
                      <li key={option.name}>
                        <Link
                          className="text-dark/40 hover:text-dark transition-colors duration-300"
                          href={option.href}
                        >
                          {option.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col gap-7">
                <h4>Language</h4>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t-light/40 flex items-center justify-between gap-2 border-t-2 pt-12.5">
            {/* Copyright */}
            <p>© DaCode. 2020</p>

            {/* Socials */}
            <div className="xs:gap-5 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-dark hover:text-dark/70 text-base font-bold transition-colors duration-300 lg:text-[19px]"
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
