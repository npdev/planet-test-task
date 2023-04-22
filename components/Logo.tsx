type LogoProps = {
  color: string
}

function Logo(props: LogoProps) {
  return (
    <div className={`relative w-[130px] h-[33px] text-[${props.color}]`}>
      <div className='absolute right-[-11.34%] bottom-[45.45%]'>
        <div>PLANET</div>
        <div>TM</div>
      </div>
      <div>CARAVANS</div>
    </div>
  )
}

export default Logo