import {Image as ImageType} from 'sanity'
import Image from 'next/image'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/sanity-client';

const imageBuilder = imageUrlBuilder(client)

function urlFor(source: ImageType) {
  return imageBuilder.image(source)
}

type CTAProps = {
  leftLink: string,
  rightLink: string,
  imageLeft: ImageType,
  imageRight: ImageType,
}

export default function CTA({leftLink, imageLeft, rightLink, imageRight}: CTAProps) {
  return (
    <div className='flex flex-row items-start pt-[72px] h-[750px] overflow-hidden'>
      <div className='relative bg-[#C4EBF8] h-[678px] w-[720px]'>
        <h5 className='absolute right-[17px] top-[197px]'>KEEP ON</h5>
        <h4>
          <Link href='/'
                className='absolute flex flex-row right-[49px] top-[310px] text-center'>
            <pre>&lt;  </pre>
            {leftLink}</Link>
        </h4>
        <div className='absolute -left-[499px] top-[164px] w-[921px] h-[421]'>
          <Image
            src={urlFor(imageLeft).width(921).height(421).url()}
            alt='Image Left' width={921} height={421}
          />
        </div>
      </div>
      <div className='relative bg-[#B11823] h-[678px] w-[720px]'>
        <h5 className='absolute left-[15px] top-[197px] text-[#ffffff]'>EXPLORING</h5>
        <h4>
          <Link href='/'
                className='absolute flex flex-row left-[57px] top-[310px] text-[#ffffff] text-center'>{rightLink}
            <pre>  &gt;</pre>
          </Link>
        </h4>
        <div className='absolute left-[305px] top-[164px] w-[921px] h-[421]'>
          <Image
            src={urlFor(imageRight).width(921).height(421).url()}
            alt='Image Right' width={921} height={421}
          />
        </div>
      </div>
    </div>
  )
}