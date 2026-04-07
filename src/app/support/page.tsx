import type { Metadata } from "next";
import Link from "next/link";
import { getTranslation } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getFaqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Support - ClipArc",
  description: "Get help and support for ClipArc - Smart Clipboard Manager for macOS",
  path: "/support",
});

export default function SupportPage() {
  const t = getTranslation("en");
  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11"] as const;
  const faqs = faqKeys.map((key) => t.cliparc.support.faq[key]);

  return (
    <>
      <JsonLd data={getFaqJsonLd(faqs)} />
      <Header currentPath="/support" />

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-2">{t.cliparc.support.title}</h1>
          <p className="text-gray-400 mb-12">{t.cliparc.support.subtitle}</p>

          <div className="space-y-8">
            {/* Contact */}
            <section className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4">{t.cliparc.support.contact.title}</h2>
              <p className="text-gray-300 mb-4">{t.cliparc.support.contact.description}</p>
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

            {/* Getting Started */}
            <section className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">{t.cliparc.support.gettingStarted.title}</h2>
              <div className="space-y-6">
                {(["step1", "step2", "step3"] as const).map((step) => (
                  <div key={step}>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {t.cliparc.support.gettingStarted[step].title}
                    </h3>
                    <p className="text-gray-400">
                      {t.cliparc.support.gettingStarted[step].description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">{t.cliparc.support.faq.title}</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400">
                      {faq.answer}
                      {i === 1 && (
                        <>
                          {" "}
                          <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                            {t.cliparc.support.links.privacy}
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Links */}
            <section className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4">{t.cliparc.support.links.title}</h2>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/" className="text-blue-400 hover:text-blue-300">{t.cliparc.support.links.home}</Link></li>
                <li><Link href="/privacy" className="text-blue-400 hover:text-blue-300">{t.cliparc.support.links.privacy}</Link></li>
                <li><Link href="/terms" className="text-blue-400 hover:text-blue-300">{t.cliparc.support.links.terms}</Link></li>
                <li><Link href="/troubleshooting" className="text-blue-400 hover:text-blue-300">{t.cliparc.support.links.troubleshooting}</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
