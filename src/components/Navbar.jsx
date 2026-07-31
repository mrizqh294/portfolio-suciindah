import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "Tentang Saya" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#education", label: "Pendidikan" },
  { href: "#gallery", label: "Galeri" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <a
          href="#"
          className="font-display text-headline-md font-bold text-primary tracking-tight"
        >
          SUCI INDAH
        </a>

        <ul className="hidden md:flex gap-gutter items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                className={`font-label-md text-label-md pb-1 transition-colors hover:opacity-80 ${
                  activeHref === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/62895334830722"
          className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity active:scale-95 duration-200"
        >
          Hubungi Saya
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-primary"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.ul
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden flex flex-col gap-4 px-margin-mobile bg-surface"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href} className="py-1">
            <a
              href={link.href}
              onClick={() => {
                setActiveHref(link.href);
                setMenuOpen(false);
              }}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.header>
  );
}
