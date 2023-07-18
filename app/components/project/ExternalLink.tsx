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
      className=" flex justify-between items-center bg-slate-100 hover:outline outline-slate-200 px-6 py-4  mx-2 lg:mx-0"
    >
      <span className="text-4xl">{emoji}</span>
      <p className="text-lg xl:text-2xl">{description}</p>
    </Link>
  );
}
