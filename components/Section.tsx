import CardsSection from '@/components/CardsSection'
import {Section, SectionCards, SectionImage, SectionText} from '@/types/Section'
import TextSection from '@/components/TextSection'
import ImageSection from '@/components/ImageSection'

type SectionProps = {
  type: string,
  key: string,
  children: string,
  section: Section
}

export default function Section({type, section}: SectionProps) {
  switch (type) {
    case 'sectionCards':
      const sectionCards: Section = section as SectionCards
      return <CardsSection section={sectionCards}/>
    case 'sectionText':
      const sectionText: Section = section as SectionText
      return <TextSection section={sectionText}/>
    case 'sectionImage':
      const sectionImage: Section = section as SectionImage
      return <ImageSection section={sectionImage}/>
    default: return <p>No Sections</p>
  }
}
