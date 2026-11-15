import Link from "next/link";
import Image from "next/image";
import TitleLogo from "../ui/Header/TitleLogo";
import SearchBar from "../ui/Header/SearchBar";
import ThemeToggle from "../ui/Header/ThemeToggle";

const desktopLinks = [
  { label: "صفحه اصلی", href: "/" },
  { label: "مقاله‌ها", href: "/articles" },
  { label: "درباره ما", href: "/about" },
];

const mobileLinks = [
  { label: "خانه", href: "/", icon: "⌂" },
  { label: "راهنماها", href: "/guides", icon: "▤" },
  { label: "نشان‌شده‌ها", href: "/saved", icon: "♡" },
  { label: "حساب کاربری", href: "/account", icon: "○" },
];

const Header = () => {
  return (
    <>
      <header
        dir="rtl"
        className="sticky w-full top-0 z-30 flex min-h-16 border-b border-gray-200 bg-white px-4 text-gray-900"
      >
        <div className="relative flex items-center gap-6 w-full max-w-7xl mx-auto">
          <TitleLogo />

          <nav
            aria-label="منوی اصلی"
            className="hidden items-center gap-6 md:flex"
          >
            {desktopLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-gray-950"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SearchBar />
          <ThemeToggle />
        </div>
      </header>

      <nav
        dir="rtl"
        aria-label="منوی موبایل"
        className="fixed inset-x-0 bottom-0 z-40 flex border-t border-gray-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        {mobileLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-gray-950"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              {link.icon}
            </span>
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Header;
