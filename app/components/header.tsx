import Link from "next/link";

import Clock from '@/components/header/time'

export default function Header() {
  return (
    <section
      id="header"
      className="flex justify-between text-secondary font-light"
    >
      <Link href='/' className='text-black'>Isaac Bonora</Link>
      <span className="font-mono text-sm font-thin">
        <Clock /> im München
      </span>
    </section>
  );
}
