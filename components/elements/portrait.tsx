import Image from 'next/image'

import PortraitImage from '@images/lukas-wiesehan.jpg'

type PortraitProps = {
  className?: string
}

export const Portrait = ({className}: PortraitProps) => {
  return (
    <div
      className={`-ml-0.5 aspect-square w-52 overflow-hidden rounded-3xl shadow-lg shadow-slate-200 sm:w-64 2xl:w-80 ${className}`}
    >
      <Image src={PortraitImage} placeholder="blur" />
    </div>
  )
}
