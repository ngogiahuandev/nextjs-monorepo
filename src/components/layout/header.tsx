"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";

import { cn } from "../../lib/utils";
import { HeaderMenuItem } from "../../types/header";
import { ButtonLink } from "../ui/button-link";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Header() {
  const pathname = usePathname();

  const menuItems: HeaderMenuItem[] = [
    {
      label: "Home",
      href: "/",
      isActive: pathname === "/",
    },
    {
      label: "About",
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      label: "Contact",
      href: "/contact",
      isActive: pathname === "/contact",
    },
  ];

  return (
    <header className="bg-background absolute top-0 right-0 left-0 z-50 h-16 backdrop-blur-sm">
      <nav className="py-4gap-4 container mx-auto flex h-full items-center">
        <div className="flex flex-1 items-center gap-6">
          <Link href="/">
            <h1 className="p-2 text-2xl font-semibold select-none">
              <Terminal className="mr-2" size={20} />
            </h1>
          </Link>
          <ul className="flex items-center gap-6">
            {menuItems.map(item => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-primary",
                    item.isActive && "text-primary"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-center gap-2">
            <ButtonLink href="/login" variant="outline">
              Login
            </ButtonLink>
            <ButtonLink href="/register" variant="default">
              Register
            </ButtonLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
