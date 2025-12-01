import Link from "next/link";
import Logo from "./logo";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-white/80 px-6 py-4 backdrop-blur-md border-b border-gray-100">
      <Link href="/" className="flex items-center gap-3 group">
        <Logo className="w-12 h-auto text-blue-900 transition-transform group-hover:scale-105" />
        <span className="text-xl font-bold tracking-tight text-blue-900">
          Masty Web Dev
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="#contact"
          className="rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Me contacter
        </Link>
      </nav>
    </header>
  );
}