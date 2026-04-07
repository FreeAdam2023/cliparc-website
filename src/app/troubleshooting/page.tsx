import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslation } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Troubleshooting - ClipArc",
  description: "Troubleshooting guide for ClipArc - Smart Clipboard Manager for macOS",
  path: "/troubleshooting",
});

export default function TroubleshootingPage() {
  const t = getTranslation("en");

  return (
    <>
      <Header currentPath="/troubleshooting" />

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <Link href="/support" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
            {t.cliparc.troubleshooting.backToSupport}
          </Link>

          <h1 className="text-4xl font-bold mb-2">{t.cliparc.troubleshooting.title}</h1>
          <p className="text-gray-400 mb-12">{t.cliparc.troubleshooting.subtitle}</p>

          <div className="space-y-8">
            <section className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4">{t.cliparc.troubleshooting.cantPaste.title}</h2>
              <p className="text-gray-300 mb-6">{t.cliparc.troubleshooting.cantPaste.description}</p>

              <div className="my-8">
                <Image
                  src="/accessibility-settings.webp"
                  alt={t.cliparc.troubleshooting.cantPaste.imageAlt}
                  width={800}
                  height={600}
                  className="rounded-lg border border-gray-700 w-full"
                />
              </div>

              <h3 className="text-lg font-medium text-white mb-4">{t.cliparc.troubleshooting.cantPaste.stepsTitle}</h3>
              <ol className="space-y-4 text-gray-300">
                {(["step1", "step2", "step3", "step4"] as const).map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-semibold">
                      {i + 1}
                    </span>
                    <span className="pt-1">{t.cliparc.troubleshooting.cantPaste.steps[step]}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4">{t.cliparc.troubleshooting.stillNeedHelp.title}</h2>
              <p className="text-gray-300 mb-4">{t.cliparc.troubleshooting.stillNeedHelp.description}</p>
              <a
                href="mailto:support@versegates.com"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@versegates.com
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
