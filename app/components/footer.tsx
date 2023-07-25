import Link from "next/link";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
export default function footer() {
  return (
    <footer className="flex flex-col items-center justify-between pb-12">
      <div className="flex w-full max-w-3xl gap-12 border-t pt-6 text-sm text-slate-700 justify-between px-4 lg:px-0">
        <span>Handmade with love by Isaac</span>
        <Link href="https://github.com/isbonora/isbonora.next" className="flex gap-2" target="_blank">
          Repo
          <ArrowUpRightIcon className="w-3" />
        </Link>
      </div>
    </footer>
  );
}
