import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({
  locale,
  currentPath,
}: {
  locale?: string;
  currentPath: string;
}) {
  const prefix = locale && locale !== "en" ? `/${locale}` : "";

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`${prefix}/`} className="flex items-center gap-3">
          <Image
            src="/icon.webp"
            alt="ClipArc"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold text-white">ClipArc</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href={`${prefix}/support`}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Support
          </Link>
          <LanguageSwitcher currentLocale={locale} currentPath={currentPath} />
        </nav>
      </div>
    </header>
  );
}
