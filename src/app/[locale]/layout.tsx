import { locales, isValidLocale } from "@/i18n";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // Exclude 'en' since English uses root pages (no /en/ prefix)
  return locales.filter((l) => l !== "en").map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();

  const isRTL = locale === "ar";

  return (
    <div className={isRTL ? "rtl" : "ltr"} dir={isRTL ? "rtl" : "ltr"} lang={locale}>
      {children}
    </div>
  );
}
