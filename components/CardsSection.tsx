import {SectionCards, Card} from '@/types/Section'
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

type CardProps = {
  card: Card,
  cardClass: string
}

const Card = ({card, cardClass}: CardProps) => {
  return (
    <div className='relative'>
      <div className='relative w-[592px] h-[460px]'>
        <Image
          src={urlFor(card.image).width(421).height(192).url()}
          alt='Image' width={421} height={192}
          className='absolute left-[93px] top-[30px] w-[421px] h-[192px] z-10'
        />
      </div>
      <div className={`absolute top-[116px] w-[592px] h-[344px] ${cardClass}`}>
        <div className='absolute top-[139px] left-[93px] w-[421px] h-[129px] flex flex-col items-center gap-[20px]'>
          <h4>{card.header}</h4>
          <p className='paragraph w-[446px]'>{card.text}</p>
          <Button text={card.buttonText}/>
        </div>
      </div>
    </div>
  )
}

export default function CardsSection({section}: CardsSectionProps) {
  return (
    <div className='flex flex-col items-center py=[72px] px-[112px] gap-[56px] h-[695px]'>
      <h3>{section.header}</h3>
      <div className='relative flex flex-row content-center items-start gap-[32px] w-[1216px] h-[460px]'>
        <Card card={section.leftCard} cardClass='left-card' />
        <Card card={section.rightCard} cardClass='right-card' />
      </div>
    </div>
  )
}
