import { PortableTextBlock } from 'sanity';
import type { Image } from 'sanity'

export type SectionCards = {
  _type: string,
  header: string,
  leftCard: {
    image: Image,
    header: string,
    text: string,
    buttonText: string
  },
  rightCard: {
    image: Image,
    header: string,
    text: string,
    buttonText: string
  }
}

export type SectionText = {
  _type: string,
  header: string,
  label: string,
  paragraph: PortableTextBlock,
}

export type SectionImage = {
  _type: string,
  alt: string,
  image: Image,
}

export type Section = SectionCards | SectionText | SectionImage

export type Sections = {
  sections: Section[]
}
