import {SectionImage} from '@/types/Section';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/sanity-client';
import {Image as ImageType} from 'sanity';

type ImageSectionProps = {
  section: SectionImage
}
const imageBuilder = imageUrlBuilder(client)

function urlFor(source: ImageType) {
  return imageBuilder.image(source)
}

export default function ImageSection({section}: ImageSectionProps) {
  return (
    <div className='flex flex-col items-start pt-[72px] pb-[72px] pl-[112px] gap-[10px] h-[832px]'>
      <Image
        src={urlFor(section.image).width(1328).height(688).url()}
        alt={section.alt} width={1328} height={688}/>
    </div>
  )
}