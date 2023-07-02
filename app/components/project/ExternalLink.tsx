import Link from "next/link";

export default function ExternalLink({
  href,
  emoji,
  description,
}: {
  href: string;
  emoji: string;
  description: string;
}) {
  return (
    <Link
      id="file_link"
      href={href}
      target="_blank"
      className="bg-gray-100 flex justify-between items-center hover:bg-gray-200 px-6 py-4  mx-2 lg:mx-0"
    >
      <span className="text-4xl">{emoji}</span>
      <p className="text-lg xl:text-2xl">{description}</p>
    </Link>
  );
}
