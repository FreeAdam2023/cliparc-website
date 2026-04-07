"use client";

import { useState, useRef, useEffect } from "react";
import { localeNames, type Locale } from "@/i18n/config";

const localeList = Object.entries(localeNames) as [Locale, string][];

export default function LanguageSwitcher({
  currentLocale,
  currentPath,
}: {
  currentLocale?: string;
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = currentLocale || "en";
  const displayName = localeNames[current as Locale] || "English";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getLocalePath(locale: string) {
    if (locale === "en") return currentPath || "/";
    return `/${locale}${currentPath || "/"}`;
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition px-2 py-1 rounded"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        {displayName}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-1 max-h-80 overflow-y-auto">
          {localeList.map(([locale, name]) => (
            <a
              key={locale}
              href={getLocalePath(locale)}
              className={`block px-4 py-2 text-sm hover:bg-gray-700 transition ${
                locale === current
                  ? "text-blue-400 font-medium"
                  : "text-gray-300"
              }`}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
