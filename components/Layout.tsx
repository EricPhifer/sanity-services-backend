import React, { useState } from 'react'
import Head from 'next/head'
import { SocialIcon } from './SocialIcons'
 
import LayoutContext from '@context/LayoutContext'
import { Country } from '@typings/models'
import Navbar from './Navbar'
import Footer from './Footer'

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
  title = 'Eric Phifer LLC - Services',
}) => {
  const [animation, setAnimation] = useState(false)
  const handleAnimation = (event: React.MouseEvent) => {
    event.preventDefault()
    setAnimation(!animation)
  }
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
