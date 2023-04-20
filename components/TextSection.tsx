import {SectionText} from '@/types/Section';
import { PortableText } from '@portabletext/react';

type TextSectionProps = {
  section: SectionText
}


export default function TextSection({section}: TextSectionProps) {
  return (
    <div className='flex flex-col items-start py-[72px] px-[216px] gap-[24px] h-[462px]'>
      <label
        className='font-audrey italic font-bold text-[16px] text-[#03110E]
        leading-[19px] tracking-[8px] uppercase'>{section.label}</label>
      <div className='flex flex-row items-start gap-[136px] h-[275px]'>
        <h2 className='font-josefin non-italic font-semibold text-[46px] text-[#03110E]
        leading-[55px] -tracking-[1px]'>{section.header}</h2>
        <div className='font-josefin non-italic font-normal text-[18px] text-[#03110E] leading-[29px]'>
          <PortableText value={section.paragraph} />
        </div>
      </div>
    </div>
  )
}