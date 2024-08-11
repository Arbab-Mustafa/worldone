"use client";

import Link from "next/link";
import { PiUserDuotone, PiListDuotone, PiXDuotone } from "react-icons/pi";
import { IconButton } from "@/components/ui/icon-button";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FaTelegramPlane, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navbarData = {
  links: [
    { href: "/#home", label: "Home" },
    { href: "/#quick-links", label: "Quick Links" },
    { href: "/#owc-notes", label: "OWC Notes" },
    { href: "/#owct", label: "OWCT" },
  ],
};

export const socialIcons = [
  { icon: FaTelegramPlane, url: "https://t.me/oneworldchain" },
  { icon: FaXTwitter, url: "https://x.com/OneWorldChain" },
  { icon: FaMedium, url: "https://medium.com/@oneworldchain" },
];

const NavbarLinkItem = ({ links, className, onClick }) => (
  <div className={`flex gap-10 ${className}`}>
    {links.map((link, index) => (
      <Link
        key={index}
        onClick={onClick}
        href={link.href}
        className="flex items-center py-2 text-base font-medium text-[#1D1E25] hover:text-[#4188F8] hover:no-underline"
      >
        {link.label}
      </Link>
    ))}
  </div>
);

export const NavLinks = () => {
  return (
    <Disclosure
      as="nav"
      className="text-default-fg fixed z-50 w-full bg-overlay-1100 lg:relative "
    >
      {({ open, close }) => (
        <>
          <div
            className={`mx-auto max-w-screen-xl p-3.5 lg:px-0  ${open ? "h-full max-lg:bg-bg-default" : "backdrop-blur-sm"}`}
          >
            <div className="relative flex w-full items-center justify-between">
              <div className="w-full items-center justify-center gap-2 lg:flex lg:items-stretch lg:justify-start">
                <Link
                  href="/"
                  className="flex flex-shrink-0 cursor-pointer items-center"
                >
                  <Image
                    width={70}
                    height={70}
                    className="object-contain"
                    src="/owc.webp"
                    alt="logo"
                  />
                </Link>
                <NavbarLinkItem
                  className="hidden w-full justify-center lg:flex"
                  links={navbarData.links}
                  onClick={() => {}}
                />
              </div>
              <div className="flex lg:hidden">
                <Disclosure.Button className="z-50 rounded-md text-fg-text-contrast">
                  <IconButton
                    as="div"
                    variant="primary"
                    size="medium"
                    type="ghost"
                    icon={
                      open ? (
                        <PiXDuotone
                          aria-hidden="true"
                          className="z-30 flex text-fg-text-contrast"
                        />
                      ) : (
                        <PiListDuotone
                          aria-hidden="true"
                          className="text-fg-text-contrast"
                        />
                      )
                    }
                  />
                </Disclosure.Button>
              </div>
              <div className="hidden lg:flex lg:items-center lg:gap-4">
                {socialIcons.map(({ icon: Icon, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      size={24}
                      color="#000"
                      className="hover:fill-[#4188F8]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="fixed left-0 top-[100px] z-20 flex h-full w-full flex-col gap-9 bg-bg-default p-12">
              <NavbarLinkItem
                className="flex flex-col gap-3"
                links={navbarData.links}
                onClick={() => close()}
              />
              <div className="flex gap-4">
                {socialIcons.map(({ icon: Icon, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      size={24}
                      color="#000"
                      className="hover:fill-[#4188F8]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
