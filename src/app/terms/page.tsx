import type { Metadata } from "next";
import Link from "next/link";
import { getTranslation } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service - ClipArc",
  description: "Terms of Service for ClipArc - Smart Clipboard Manager for macOS",
  path: "/terms",
});

export default function TermsPage() {
  const t = getTranslation("en");
  const s = t.cliparc.terms.sections;

  return (
    <>
      <Header currentPath="/terms" />

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-2">{t.cliparc.terms.title}</h1>
          <p className="text-gray-400 mb-8">{t.cliparc.terms.subtitle}</p>
          <p className="text-gray-500 mb-12">{t.cliparc.terms.lastUpdated}</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.agreement.title}</h2>
              <p>{s.agreement.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.description.title}</h2>
              <p>{s.description.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.license.title}</h2>
              <p>{s.license.intro}</p>
              <p className="mt-4">{s.license.restrictions}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                {s.license.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.subscriptions.title}</h2>
              <p className="mb-4">{s.subscriptions.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {s.subscriptions.tiers.map((tier, i) => <li key={i}>{tier}</li>)}
              </ul>
              <p className="mt-4">{s.subscriptions.note}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.refunds.title}</h2>
              <p>{s.refunds.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.userResponsibilities.title}</h2>
              <p>{s.userResponsibilities.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                {s.userResponsibilities.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.privacy.title}</h2>
              <p>
                {s.privacy.content}{" "}
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                  {t.cliparc.cta.privacy}
                </Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.disclaimer.title}</h2>
              <p>{s.disclaimer.content1}</p>
              <p className="mt-4">{s.disclaimer.content2}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.liability.title}</h2>
              <p>{s.liability.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                {s.liability.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.indemnification.title}</h2>
              <p>{s.indemnification.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.modifications.title}</h2>
              <p>{s.modifications.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.changes.title}</h2>
              <p>{s.changes.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.governingLaw.title}</h2>
              <p>{s.governingLaw.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.contact.title}</h2>
              <p>{s.contact.content}</p>
              <p className="mt-4">
                <a href="mailto:support@versegates.com" className="text-blue-400 hover:text-blue-300">
                  support@versegates.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
