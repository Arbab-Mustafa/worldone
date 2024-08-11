import Link from 'next/link';
import React from 'react';
import { FaTelegramPlane, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const footerData = {
  logoUrl: "/logo_footer.png",
  description: "Get the ultimate user experience with fast transactions at super-low gas fee.",
  links: [
    { url: "#", label: "About" },
    { url: "https://docs.oneworldchain.org", label: "Docs", external: true },
    { url: "https://bridge.oneworldchain.org", label: "Bridge", external: true },
    { url: "/privacypolicy", label: "Privacy Policy" },
    { url: "/brand-asset", label: "Brand Asset" },
    { url: "/tos", label: "Terms of Service" },
  ],
  socialLinks: [
    { url: "https://t.me/oneworldchain", icon: "telegram" },
    { url: "https://x.com/OneWorldChain", icon: "twitter" },
    { url: "https://medium.com/@oneworldchain", icon: "medium" },
  ],
  copyright: "© Since 2024 One World Chain. All rights reserved.",
};

export const socialIcons = [
  { icon: FaTelegramPlane, url: 'https://t.me/oneworldchain' },
  { icon: FaXTwitter, url: 'https://x.com/OneWorldChain' },
  { icon: FaMedium, url: 'https://medium.com/@oneworldchain' }
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="w-full bg-[#18181D] text-white py-[60px] px-10" id="owct">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-7 mb-8">
          <div className="mr-auto max-w-[320px]">
            <Link href="/">
              <img alt="logo" src="/logo_footer.png" className="w-full" />
            </Link>
            <p className="text-[#FFFFFFBF] mt-5 md:text-base text-sm">
              Get the ultimate user experience with fast transactions at super-low gas fee.
            </p>
          </div>
          <div className="flex flex-col lg:items-end items-center font-bold mx-auto">
            <div className="md:gap-6 gap-5 flex-wrap mb-8 md:text-base text-sm flex">
              {footerData.links.map((link, index) => (
                <div key={index} className="flex items-center">
                  <Link href={link.url} className="hover:underline">
                    {link.label}
                  </Link>
                  {index < footerData.links.length - 1 && (
                    <p className="text-[#FFFFFF14] mx-2">|</p>
                  )}
                </div>
              ))}
            </div>
            <div className="gap-6 flex">
              {socialIcons.map(({ icon: Icon, url }, index) => (
                <Link key={index} href={url} target="_blank">
                  <Icon className="text-2xl" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="md:text-base text-sm">
            © Since {currentYear} One World Chain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};