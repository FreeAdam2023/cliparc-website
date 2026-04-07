import type { Metadata } from "next";
import { BASE_URL, APP_ID } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ClipArc - Smart Clipboard Manager for macOS",
    template: "%s | ClipArc",
  },
  description:
    "The intelligent clipboard manager that remembers everything you copy. Smart content detection, instant search, and seamless paste across all your apps on Mac.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "ASqkl42Eo5N_qlEaVFufd9_hvBSLhqqZU6qvzEnvt0Y",
  },
  other: {
    "apple-itunes-app": `app-id=${APP_ID}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
