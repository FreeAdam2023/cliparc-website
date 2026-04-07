import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getTranslation } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getSoftwareApplicationJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppStoreButton from "@/components/AppStoreButton";

export const metadata: Metadata = buildMetadata({
  title: "ClipArc - Smart Clipboard Manager for macOS",
  description:
    "The intelligent clipboard manager that remembers everything you copy. Smart content detection, instant search, and seamless paste across all your apps on Mac.",
  path: "/",
});

export default function HomePage() {
  const t = getTranslation("en");

  const contentTypes = [
    t.cliparc.contentTypes.text,
    t.cliparc.contentTypes.urls,
    t.cliparc.contentTypes.images,
    t.cliparc.contentTypes.code,
    t.cliparc.contentTypes.colors,
    t.cliparc.contentTypes.emails,
    t.cliparc.contentTypes.phoneNumbers,
    t.cliparc.contentTypes.numbers,
    t.cliparc.contentTypes.json,
    t.cliparc.contentTypes.files,
  ];

  const perfectFor = [
    t.cliparc.perfectFor.developers,
    t.cliparc.perfectFor.writers,
    t.cliparc.perfectFor.designers,
    t.cliparc.perfectFor.dataAnalysts,
    t.cliparc.perfectFor.businessProfessionals,
    t.cliparc.perfectFor.powerUsers,
  ];

  const features = [
    t.cliparc.features.intelligentDetection,
    t.cliparc.features.instantAccess,
    t.cliparc.features.powerfulSearch,
    t.cliparc.features.frequentItems,
    t.cliparc.features.privacyFirst,
    t.cliparc.features.smartPaste,
  ];

  return (
    <>
      <JsonLd data={getSoftwareApplicationJsonLd()} />
      <Header currentPath="/" />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Image
                src="/icon.png"
                alt="ClipArc App Icon"
                width={128}
                height={128}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ClipArc
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              {t.cliparc.hero.tagline}
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.cliparc.hero.description}
            </p>
          </div>

          {/* Main Screenshot */}
          <div className="mb-16">
            <Image
              src="/screenshot.webp"
              alt="ClipArc showing clipboard history with different content types"
              width={1400}
              height={900}
              className="rounded-xl shadow-2xl mx-auto border border-gray-700"
            />
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-800/70 backdrop-blur rounded-xl p-6 shadow-lg border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Content Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t.cliparc.contentTypes.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {contentTypes.map((type) => (
                <div
                  key={type}
                  className="bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700/50"
                >
                  <span className="text-gray-300">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Perfect For */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t.cliparc.perfectFor.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perfectFor.map((item) => (
                <div key={item.title} className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="bg-gray-800/70 backdrop-blur rounded-xl p-8 mb-16 border border-gray-700/50">
            <h2 className="text-2xl font-bold mb-6">
              {t.cliparc.features.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <ul className="space-y-2">
                <li>{t.cliparc.featuresList.unlimitedHistory}</li>
                <li>{t.cliparc.featuresList.contentTypes}</li>
                <li>{t.cliparc.featuresList.globalHotkey}</li>
                <li>{t.cliparc.featuresList.fuzzySearch}</li>
                <li>{t.cliparc.featuresList.frequentItems}</li>
                <li>{t.cliparc.featuresList.urlTitle}</li>
              </ul>
              <ul className="space-y-2">
                <li>{t.cliparc.featuresList.menuBar}</li>
                <li>{t.cliparc.featuresList.batchDelete}</li>
                <li>{t.cliparc.featuresList.sourceApp}</li>
                <li>{t.cliparc.featuresList.offline}</li>
                <li>{t.cliparc.featuresList.languages}</li>
                <li>{t.cliparc.featuresList.nativeDesign}</li>
              </ul>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">
              {t.cliparc.requirements.title}
            </h2>
            <p className="text-gray-300">
              {t.cliparc.requirements.description}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <AppStoreButton label={t.cliparc.cta.download} />
            <p className="mt-4 text-gray-400 space-x-4">
              <Link href="/privacy" className="underline hover:text-white">
                {t.cliparc.cta.privacy}
              </Link>
              <Link href="/terms" className="underline hover:text-white">
                {t.cliparc.cta.terms}
              </Link>
              <Link href="/support" className="underline hover:text-white">
                {t.cliparc.cta.support}
              </Link>
              <Link
                href="/troubleshooting"
                className="underline hover:text-white"
              >
                {t.cliparc.cta.troubleshooting}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
