"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../themeToggle";

type NavKey = "home" | "about" | "services" | "contact";

export default function Navbar() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  const navigation: { name: NavKey; href: string }[] = [
    { name: "home", href: "/" },
    { name: "about", href: "#about" },
    { name: "services", href: "#services" },
    { name: "contact", href: "#contact" },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const handleCurrent = (href: string) => pathname === href;

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0  w-full z-50 bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                  <Bars3Icon
                    aria-hidden="true"
                    className={`h-6 w-6 ${open ? "hidden" : "block"}`}
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className={`h-6 w-6 ${open ? "block" : "hidden"}`}
                  />
                </Disclosure.Button>
              </div>

              {/* Left side - Logo + Text */}
              <div className="flex items-center sm:flex-none flex-1 justify-center sm:justify-start">
                <Link href="/" className="flex shrink-0 items-center gap-2">
                  <p className="font-bold text-white text-lg">AbdelRahman</p>
                </Link>
              </div>

              {/* Center - Navigation Links */}
              <div className="hidden sm:flex flex-1 justify-center">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        handleCurrent(item.href)
                          ? "bg-gray-950/50 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-4 py-2 text-sm font-medium transition-colors"
                      )}
                    >
                      {t(item.name)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right side - Theme & Language (Desktop only) */}
              <div className="hidden sm:flex items-center space-x-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => window.scrollTo(0, 0)} // scroll top on mobile navigation
                  className={classNames(
                    handleCurrent(item.href)
                      ? "bg-gray-950/50 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {t(item.name)}
                </Link>
              ))}

              {/* Mobile Theme & Language Controls */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-700 mt-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
