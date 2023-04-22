import {SectionText} from '@/types/Section';
import { PortableText } from '@portabletext/react';

type TextSectionProps = {
  section: SectionText
}


export default function TextSection({section}: TextSectionProps) {
  return (
    <div className='flex flex-col items-start py-[72px] px-[216px] gap-[24px] h-[462px]'>
      <label>{section.label}</label>
      <div className='flex flex-row items-start gap-[136px] h-[275px]'>
        <h2>{section.header}</h2>
        <div className='paragraph opacity-[.6]'>
          <PortableText value={section.paragraph} />
        </div>
      </div>
    </div>
  )
}