"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { accessMailto, nav } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname === "";
  }
  return pathname === href || pathname.startsWith(href.replace(/\/$/, ""));
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="ps-header">
      <div className="ps-wrap ps-header__bar">
        <Logo />
        <nav className="ps-nav" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isCurrent(pathname, item.href) ? "is-current" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="ps-btn ps-btn--sm" href={accessMailto}>
            Request access
          </a>
        </nav>
        <button
          className="ps-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="ps-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        className={`ps-mobile${open ? " is-open" : ""}`}
        id="ps-mobile-nav"
      >
        <div className="ps-wrap">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="ps-btn ps-mobile__cta" href={accessMailto}>
            Request access
          </a>
        </div>
      </div>
    </header>
  );
}
