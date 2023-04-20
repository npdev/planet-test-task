type ButtonProps = {
  text: string
}

export default function Button({text}: ButtonProps) {
  return (
    <button
      className='flex flex-col content-center items-start text-center
      text-[13px] leading-[16px]
      px-[32px] pt-[14px] pb-[12px] w-[133px] md:w-auto h-[42px]
      box-border border-solid border border-[#03110E]
      hover:bg-[#03110E]
      hover:text-white
      font-josefin'
    >{text}</button>
  )
}
