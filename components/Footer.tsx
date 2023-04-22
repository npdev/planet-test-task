import Link from 'next/link';
import Image from 'next/image';
import logoPic from '@/assets/logo-white.svg';
// import Logo from './Logo'

function Logo() {
  return <Image src={logoPic} alt='Logo'/>
}

type LinksItemProps = {
  name: string
}

function LinksItem(props: LinksItemProps) {
  return (
    <Link href='/'
          className='footer'>
      {props.name}</Link>
  )
}

function Links() {
  return (
    <div className='flex flex-row gap-[54px] justify-end items-center h-[16px] w-[1134px] font-josefin'>
      <LinksItem name='PRIVACY POLICY'/>
      <LinksItem name='COOKIE POLICY'/>
      <LinksItem name='@ 2022'/>
    </div>
  )
}

function Footer() {
  return (
    <div
      className='flex flex-row gap-x-[16px] px-[80px] py-[86px] items-center content-center h-[205px] w-full bg-[#03110E]'>
      <Logo />
      <Links />
    </div>
  )
}

export default Footer
