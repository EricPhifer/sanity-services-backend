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
import Footer from './Footer'

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
      <Footer />
    </LayoutContext.Provider>
  )
}

export default Layout
