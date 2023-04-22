'use client'

import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/sanity-client'
import type {Image as ImageType} from 'sanity'
import Button from '@/components/Button';

import {useRef} from 'react';
import {useDraggable} from 'react-use-draggable-scroll';

const imageBuilder = imageUrlBuilder(client)

function urlFor(source: ImageType) {
  return imageBuilder.image(source)
}

type HeroProps = {
  header: string,
  text: string,
  images: ImageType[],
}

const Hero = ({header, text, images}: HeroProps): JSX.Element => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const {events} = useDraggable(ref);

  return (
    <div className='h-[911px]'>
      <div className='h-[655px] w-full bg-[#C4EBF8]'>
        <div className='absolute letf-[112px] top-[232px] flex flex-col items-start w-[610px] h-[190px] gap-y-[24px] pl-[112px]'>
          <div className='flex flex-col gap-y-[18px] w-[610px]'>
            <h1>{header}</h1>
            <p className='w-[445px] paragraph'>{text}</p>
          </div>
          <Button text='Create your own'/>
        </div>
        <div className='absolute top-[460px]
                      flex flex-col items-start content-center gap-[10px]
                      h-[432px] px-[120px]
                      overflow-x-scroll no-scrollbar'
             {...events}
             ref={ref}
        >
          <div className='relative flex flex-row items-start h-[342px] gap-[141px] pt-[45px]'>
            <button className='absolute left-[332px] top-[156px] rounded-full bg-[#03110E] z-10 w-[100px] h-[100px]'>
              <div className='w-[66.67px] h-[31.43px] flex flex-col content-center items-center gap-[1px] absolute left-[17px] top-[34px]'>
                <p className='text-[#ffffff] d-button-text'>Planet 23</p>
                <p className='w-[70px] h-[16px] text-[#ffffff]/[0.4] d-button-text-price'>From £26,950</p>
              </div>
            </button>
            {images.map((image) => (
              <Image key={urlFor(image).toString()} src={urlFor(image).width(749).height(342).url()} alt='Image'
                     width={749} height={342}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
