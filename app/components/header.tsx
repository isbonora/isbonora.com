import Link from "next/link";

import Clock from '@/components/header/time'

export default function Header() {
  return (
    <section
      id="header"
      className="flex justify-between text-secondary font-light"
    >
      <span>hello [@] isbonora.com</span>
      <span className="font-mono text-sm font-thin">
        <Clock /> im München
      </span>
    </section>
  );
}
