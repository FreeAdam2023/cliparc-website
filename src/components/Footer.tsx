import Link from "next/link";

export default function Footer({ locale }: { locale?: string }) {
  const prefix = locale && locale !== "en" ? `/${locale}` : "";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {year} Versegates. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-gray-400">
            <Link href={`${prefix}/privacy`} className="hover:text-white transition">
              Privacy
            </Link>
            <Link href={`${prefix}/terms`} className="hover:text-white transition">
              Terms
            </Link>
            <Link href={`${prefix}/support`} className="hover:text-white transition">
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
