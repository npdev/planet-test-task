import Link from 'next/link'
import Image from 'next/image'
import logoPic from '@/assets/logo-black.svg'

type NavItemProps = {
  name: string
}

function NavItem(props: NavItemProps) {
  return <Link href="/" className='align-middle'>{props.name}</Link>
}

function Logo() {
  return <Image src={logoPic} alt='Logo' />
}

function Navbar() {
  return (
    <header className='flex items-center gap-x-[76px] justify-center columns-5 h-[119px] w-full bg-[#C4EBF8] font-josefin'>
      <NavItem name='COMMERCIAL' />
      <NavItem name='TOURERS' />
      <Logo />
      <NavItem name='OUR HISTORY' />
      <NavItem name='GET IN TOUCH' />
    </header>
  )
}

export default Navbar
