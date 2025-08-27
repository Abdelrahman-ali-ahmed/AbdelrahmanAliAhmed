"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {Disclosure, DisclosureButton,  DisclosurePanel,} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../themeToggle";


type NavKey = "home" | "about" | "services" | "contact";

export default function Navbar() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  const navigation: { name: NavKey; href: string }[] = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "services", href: "/services" },
    { name: "contact", href: "/contact" },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const handleCurrent = (href: string) => pathname === href;

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full z-50 bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo + Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      handleCurrent(item.href)
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {t(item.name)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              className={classNames(
                handleCurrent(item.href)
                  ? "bg-gray-950/50 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {t(item.name)}
            </DisclosureButton>
          ))}
         
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
