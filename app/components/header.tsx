import Link from "next/link";

import Clock from '@/components/header/time'

export default function Header() {
  return (
    <section
      id="header"
      className="flex justify-between text-secondary font-light px-2 lg:px-0"
    >
      <Link href='/' className='text-black'>Isaac Bonora</Link>
      <span className="font-mono text-sm font-thin">
        <Clock /> GMT+2
      </span>
    </section>
  );
}
