import React, { useState } from 'react'
import Head from 'next/head'
import { SocialIcon } from './SocialIcons'
import {
  LineItemsContainer,
  LineItemsCount,
} from '@commercelayer/react-components'
import ShoppingBag from './ShoppingBag'
import LayoutContext from '@context/LayoutContext'
import { Country } from '@typings/models'
import { Transition } from '@headlessui/react'
import locale from '@locale/index'
import Navbar from './Navbar'

const getCmsHref = (cms: 'contentful' | 'dato' | string) => {
  switch (cms) {
    case 'contentful':
      return '//contentful.com'
    case 'dato':
      return '//datocms.com'
    default:
      return '#'
  }
}

type Props = {
  title?: string
  socialIcons?: SocialIcon[]
  showMenu?: boolean
  lang?: string
  buildLanguages?: Country[]
  countries?: Country[]
  cms: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  cms,
}) => {
  const [animation, setAnimation] = useState(false)
  const handleAnimation = (event: React.MouseEvent) => {
    event.preventDefault()
    setAnimation(!animation)
  }
  const cmsHref = getCmsHref(cms)
  const opacity = animation
    ? 'opacity-25 transition ease-in duration-300'
    : 'transition ease-in duration-300'
  return (
    <LayoutContext.Provider value={{ handleAnimation }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="//data.commercelayer.app/assets/fonts/eina01.min.css"
          rel="stylesheet"
        />
        <link
          href="//data.commercelayer.app/assets/fonts/fontawesome.min.css"
          rel="stylesheet"
        />
        <link rel="shortcut icon" type="image/x-icon" href="https://data.commercelayer.app/assets/images/favicons/favicon.ico"/>
        {/* <link
          href="//data.commercelayer.app/assets/css/commercelayer.min.css"
          rel="stylesheet"
          key="Commerce Layer Style"
        /> */}
      </Head>
      <Navbar />
      <main>{children}</main>
      
        <footer className={`mt-12 border-t border-gray-200 py-8 ${opacity}`}>
          <p className="text-xs mx-5 sm:mx-0 sm:text-base text-gray-400 text-center">
            Powered by{' '}
            <a
              className="underline hover:text-blue-500"
              href="//commercelayer.io"
              target="_blank"
            >
              Commerce Layer
            </a>
            ,{' '}
            <a
              href={cmsHref}
              target="_blank"
              className="capitalize underline hover:text-blue-500"
            >
              {cms}
            </a>
            , and{' '}
            <a
              className="underline hover:text-blue-500"
              href="//nextjs.org"
              target="_blank"
            >
              Next.js
            </a>{' '}
            on{' '}
            <a
              className="underline hover:text-blue-500"
              href="//netlify.com"
              target="_blank"
            >
              Netlify.
            </a>
          </p>
        </footer>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout
