import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/sanity-client'
import type { Image as ImageType } from 'sanity'

const imageBuilder = imageUrlBuilder(client)

function urlFor(source: ImageType) {
  return imageBuilder.image(source)
}

type HeroProps = {
  header: string,
  text: string,
  images: ImageType[],
}

export default function Hero({ header, text, images }: HeroProps) {
  return (
    <div>
      <div>
        <div className='flex flex-col items-start max-w-[498px] gap-y-[24px]'>
          <div className='flex flex-col gap-y-[18px]'>
            <h1 className='text-[40px] uppercase leading-[48px] font-normal font-audrey not-italic'>{header}</h1>
            <p className='text-[18px] font-normal leading-[160%] not-italic font-josefin'>{text}</p>
          </div>
          <button className='flex flex-col content-center items-start text-center text-[13px] leading-[16px] px-[32px] pt-[14px] pb-[12px] w-[133px] md:w-auto h-[42px] box-border border-solid border border-[#03110E] font-josefin'>Create your own</button>
        </div>
        <div className='flex flex-row items-start gap-[141px] overflow-hidden px-[120px]'>
          {images.map((image) => (
            <Image src={urlFor(image).width(749).height(342).url()} alt='Image' width={749} height={342}/>
          ))}
        </div>
      </div>
    </div>
  )
}
