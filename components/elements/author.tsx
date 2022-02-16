import Image from 'next/image'
import Link from 'next/link'

import {SolidLinkedInIcon} from '@components/elements/icons/solid-linkedin-icon'
import {SolidInstagramIcon} from '@components/elements/icons/solid-instagram-icon'
import {SolidTwitterIcon} from '@components/elements/icons/solid-twitter-icon'

type AuthorProps = {
  author: {
    name: string
    position: string
    avatar: string
    linkedIn?: string
    instagram?: string
    twitter?: string
  }
}

export const Author = ({author}: AuthorProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
        <Image src={author.avatar} alt={author.name} layout="fill" placeholder="blur" blurDataURL={author.avatar} />
      </div>
      <div>
        <p className="text-lg font-black leading-none text-slate-900">{author.name}</p>
        <p className="leading-snug">{author.position}</p>
        <p className="pt-2 text-slate-900">
          {author.linkedIn && (
            <Link href={author.linkedIn}>
              <a className="mr-2 inline-block hover:text-slate-700" rel="noreferrer" target="_blank">
                <SolidLinkedInIcon />
              </a>
            </Link>
          )}
          {author.instagram && (
            <Link href={author.instagram}>
              <a className="mr-2 inline-block hover:text-slate-700" rel="noreferrer" target="_blank">
                <SolidInstagramIcon />
              </a>
            </Link>
          )}
          {author.twitter && (
            <Link href={author.twitter}>
              <a className="mr-2 inline-block hover:text-slate-700" rel="noreferrer" target="_blank">
                <SolidTwitterIcon />
              </a>
            </Link>
          )}
        </p>
      </div>
    </div>
  )
}
