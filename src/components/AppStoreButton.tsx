import { getAppStoreUrl } from "@/lib/metadata";

export default function AppStoreButton({
  locale,
  label,
}: {
  locale?: string;
  label: string;
}) {
  return (
    <a
      href={getAppStoreUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition shadow-lg"
    >
      {label}
    </a>
  );
}
