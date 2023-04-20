import {SectionCards} from '@/types/Section'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/sanity-client'
import {Image as ImageType} from 'sanity'
import Button from '@/components/Button'

const imageBuilder = imageUrlBuilder(client)

function urlFor(source: ImageType) {
  return imageBuilder.image(source)
}

type CardsSectionProps = {
  section: SectionCards
}

export default function CardsSection({section}: CardsSectionProps) {
  return (
    <div className="flex flex-col items-center py=[72px] px-[112px] gap-[56px] h-[695px]">
      <h3>{section.header}</h3>
      <div className="relative flex flex-row content-center items-start gap-[32px] w-[1216px] h-[460px]">
        <div className="relative">
          <div className="relative w-[592px] h-[460px]">
            <Image
              src={urlFor(section.leftCard.image).width(421).height(192).url()}
              alt="Image" width={421} height={192}
              className="absolute left-[93px] top-[30px]"
            />
          </div>
          <div className="absolute top-[116px] w-[592px] h-[344px]">
            <div className="flex flex-col items-center gap-[20px] pt-[139px]">
              <h4>{section.leftCard.header}</h4>
              <p>{section.leftCard.text}</p>
              <Button text={section.leftCard.buttonText}/>
            </div>
          </div>
        </div>
        <div className="relative">
        <div className="relative w-[592px] h-[460px]">
          <Image
            src={urlFor(section.rightCard.image).width(421).height(192).url()}
            alt="Image" width={421} height={192}
            className="absolute left-[93px] top-[30px]"
          />
        </div>
        <div className="absolute top-[116px] w-[592px] h-[344px]">
          <div className="flex flex-col items-center gap-[20px] pt-[139px]">
            <h4>{section.rightCard.header}</h4>
            <p>{section.rightCard.text}</p>
            <Button text={section.rightCard.buttonText}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
