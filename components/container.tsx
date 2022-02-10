import Head from 'next/head'
import {useRouter} from 'next/router'

import {Navigation} from '@components/layout/navigation'
import {Footer} from '@components/layout/footer'

export const Container = ({children, ...customMeta}) => {
  const router = useRouter()

  const meta = {
    title:
      'Next-Level Produktwebsite durch Web-Technologien von morgen. | Lukas Wiesehan',
    description:
      'This is a basic Next.js project setup, bootstrapped with create-next-app. It includes tailwindcss and its basic plugins, optimized font loading and more.',
    url: '',
    name: '',
    image: '',
    type: 'website',
    ...customMeta,
  }
  const jsonLd = {
    '@context': 'http://www.schema.org',
    '@type': 'WebSite',
    name: meta.name,
    url: meta.url,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <link rel="canonical" href={`${meta.url}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </Head>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16 md:pt-20">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
