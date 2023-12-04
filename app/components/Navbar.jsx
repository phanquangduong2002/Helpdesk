import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.svg'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Helpdesk Logo"
        width={72}
        height={72}
        quality={100}
      />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
