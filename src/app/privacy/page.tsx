import type { Metadata } from "next";
import { getTranslation } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy - ClipArc",
  description: "Privacy Policy for ClipArc - Smart Clipboard Manager for macOS",
  path: "/privacy",
});

export default function PrivacyPage() {
  const t = getTranslation("en");
  const s = t.cliparc.privacy.sections;

  return (
    <>
      <Header currentPath="/privacy" />

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-2">{t.cliparc.privacy.title}</h1>
          <p className="text-gray-400 mb-8">{t.cliparc.privacy.subtitle}</p>
          <p className="text-gray-500 mb-12">{t.cliparc.privacy.lastUpdated}</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.privacyMatters.title}</h2>
              <p>{s.privacyMatters.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.infoCollect.title}</h2>
              <p className="mb-4"><strong>{s.infoCollect.intro}</strong></p>
              <p className="mb-4">{s.infoCollect.stored}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {s.infoCollect.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.infoNotCollect.title}</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {s.infoNotCollect.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.howItWorks.title}</h2>
              <p>{s.howItWorks.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                {s.howItWorks.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.urlFetching.title}</h2>
              <p>{s.urlFetching.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.permissions.title}</h2>
              <p className="mb-4">{s.permissions.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {s.permissions.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="mt-4">{s.permissions.note}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.dataStorage.title}</h2>
              <p>{s.dataStorage.content}</p>
              <p className="mt-4">{s.dataStorage.control}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                {s.dataStorage.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.appleSignIn.title}</h2>
              <p>{s.appleSignIn.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.inAppPurchases.title}</h2>
              <p>{s.inAppPurchases.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.thirdParty.title}</h2>
              <p>{s.thirdParty.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                {s.thirdParty.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.children.title}</h2>
              <p>{s.children.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">{s.changes.title}</h2>
              <p>{s.changes.content}</p>
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
